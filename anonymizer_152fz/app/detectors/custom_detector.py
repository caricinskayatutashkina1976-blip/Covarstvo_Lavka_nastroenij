"""Загрузка пользовательских правил."""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

import yaml

from app.detectors.base import BaseDetector
from app.models.entity import DetectedEntity, EntityType


class CustomDetector(BaseDetector):
    """Детектор по пользовательским YAML-правилам."""

    name = "custom"

    def __init__(self, rules_file: Path | None) -> None:
        self.rules_file = rules_file
        self._compiled: list[tuple[EntityType, re.Pattern[str], float]] = []
        if rules_file and rules_file.exists():
            self._load(rules_file)

    def _load(self, path: Path) -> None:
        with open(path, encoding="utf-8") as f:
            data: dict[str, Any] = yaml.safe_load(f) or {}

        mapping = {
            k: EntityType[v] if v in EntityType.__members__ else EntityType.SESSION_TOKEN
            for k, v in (data.get("entity_type_mapping") or {}).items()
        }

        for type_name, entries in (data.get("patterns") or {}).items():
            entity_type = mapping.get(type_name)
            if entity_type is None:
                try:
                    entity_type = EntityType[type_name]
                except KeyError:
                    entity_type = EntityType.SESSION_TOKEN
            for entry in entries:
                flags = re.IGNORECASE if entry.get("flags") == "IGNORECASE" else 0
                self._compiled.append(
                    (
                        entity_type,
                        re.compile(entry["regex"], flags),
                        float(entry.get("confidence", 0.9)),
                    )
                )

    def detect(self, text: str) -> list[DetectedEntity]:
        entities: list[DetectedEntity] = []
        for entity_type, pattern, confidence in self._compiled:
            for match in pattern.finditer(text):
                entities.append(
                    DetectedEntity(
                        start=match.start(),
                        end=match.end(),
                        entity_type=entity_type,
                        value=match.group(0),
                        confidence=confidence,
                        detector_name=self.name,
                    )
                )
        return entities
