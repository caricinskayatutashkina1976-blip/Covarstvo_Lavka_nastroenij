"""Сервис маскирования."""

from __future__ import annotations

from app.config import Settings, get_settings
from app.maskers.base import BaseMasker
from app.maskers.generalize import GeneralizeMasker
from app.maskers.pseudonymize import PseudonymizeMasker
from app.maskers.redact import RedactMasker
from app.maskers.tokenize import TokenizeMasker
from app.models.entity import DetectedEntity, EntityType, MaskingStrategy
from app.models.response import FoundEntityResponse


class MaskingService:
    """Применяет стратегии маскирования к тексту."""

    def __init__(
        self,
        settings: Settings | None = None,
        mapping_repo=None,
    ) -> None:
        self.settings = settings or get_settings()
        self.default_strategy = MaskingStrategy[self.settings.anonymizer_strategy]
        self.overrides = {
            EntityType[k]: MaskingStrategy[v]
            for k, v in self.settings.strategy_overrides_map.items()
            if k in EntityType.__members__ and v in MaskingStrategy.__members__
        }

        self._maskers: dict[MaskingStrategy, BaseMasker] = {
            MaskingStrategy.REDACT: RedactMasker(),
            MaskingStrategy.PSEUDONYMIZE: PseudonymizeMasker(
                self.settings.anonymizer_pseudonym_secret_key,
                mapping_repo=mapping_repo,
            ),
            MaskingStrategy.GENERALIZE: GeneralizeMasker(),
            MaskingStrategy.TOKENIZE: TokenizeMasker(mapping_repo=mapping_repo),
        }

    def get_strategy(
        self,
        entity: DetectedEntity,
        global_strategy: MaskingStrategy | None = None,
    ) -> MaskingStrategy:
        if entity.entity_type in self.overrides:
            return self.overrides[entity.entity_type]
        return global_strategy or self.default_strategy

    def apply(
        self,
        text: str,
        entities: list[DetectedEntity],
        strategy: MaskingStrategy | None = None,
        dry_run: bool = False,
        context_id: str | None = None,
    ) -> tuple[str, list[FoundEntityResponse]]:
        sorted_entities = sorted(entities, key=lambda e: e.start, reverse=True)
        result = text
        responses: list[FoundEntityResponse] = []

        for entity in sorted_entities:
            applied = self.get_strategy(entity, strategy)
            masked = entity.value if dry_run else self._maskers[applied].mask(entity, context_id)
            if not dry_run:
                result = result[: entity.start] + masked + result[entity.end :]

            responses.append(
                FoundEntityResponse(
                    entity_type=entity.entity_type,
                    value=entity.value,
                    start=entity.start,
                    end=entity.end,
                    confidence=entity.confidence,
                    strategy_applied=None if dry_run else applied,
                    detector_name=entity.detector_name,
                )
            )

        responses.reverse()
        return result, responses

    def get_pseudonymizer(self) -> PseudonymizeMasker:
        return self._maskers[MaskingStrategy.PSEUDONYMIZE]  # type: ignore[return-value]
