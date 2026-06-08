"""Оркестратор детекторов."""

from __future__ import annotations

from typing import Any

from app.config import Settings, get_settings
from app.detectors.base import BaseDetector
from app.detectors.custom_detector import CustomDetector
from app.detectors.luhn_detector import LuhnDetector
from app.detectors.ner_detector import NERDetector
from app.detectors.regex_detector import RegexDetector
from app.models.entity import DetectedEntity, EntityType


class DetectorOrchestrator:
    """Запускает все детекторы и объединяет результаты."""

    def __init__(
        self,
        settings: Settings | None = None,
        redis_client: Any | None = None,
        detectors: list[BaseDetector] | None = None,
    ) -> None:
        self.settings = settings or get_settings()
        self.confidence_threshold = self.settings.anonymizer_confidence_threshold

        if detectors is not None:
            self.detectors = detectors
        else:
            self.detectors: list[BaseDetector] = [
                RegexDetector(self.settings.patterns_file, redis_client=redis_client),
                LuhnDetector(),
            ]
            if self.settings.anonymizer_enable_ner:
                self.detectors.append(NERDetector(enabled=True))
            if self.settings.custom_rules_file:
                self.detectors.append(CustomDetector(self.settings.custom_rules_file))

    def detect(
        self,
        text: str,
        entity_types: list[EntityType] | None = None,
    ) -> list[DetectedEntity]:
        all_entities: list[DetectedEntity] = []
        for detector in self.detectors:
            try:
                found = detector.detect(text)
                all_entities.extend(found)
            except Exception:
                continue

        filtered = [
            e for e in all_entities
            if e.confidence >= self.confidence_threshold
            and (entity_types is None or e.entity_type in entity_types)
        ]
        return self._merge_overlapping(filtered)

    def _merge_overlapping(self, entities: list[DetectedEntity]) -> list[DetectedEntity]:
        """Убирает дубликаты, оставляя наиболее уверенные и длинные совпадения."""
        if not entities:
            return []

        sorted_entities = sorted(
            entities,
            key=lambda e: (-e.confidence, -(e.end - e.start), e.start),
        )
        result: list[DetectedEntity] = []

        for entity in sorted_entities:
            if any(
                entity.overlaps(kept) and not kept.contains(entity)
                for kept in result
            ):
                continue
            replaced = False
            for i, kept in enumerate(result):
                if entity.contains(kept) or (
                    entity.overlaps(kept) and entity.confidence >= kept.confidence
                ):
                    result[i] = entity
                    replaced = True
                    break
            if not replaced and not any(
                kept.contains(entity) and kept.confidence >= entity.confidence
                for kept in result
            ):
                result.append(entity)

        return sorted(result, key=lambda e: e.start, reverse=True)
