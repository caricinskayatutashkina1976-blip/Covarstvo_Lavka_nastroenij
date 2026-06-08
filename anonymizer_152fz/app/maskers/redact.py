"""Стратегия REDACT — полное замещение."""

from app.maskers.base import BaseMasker
from app.models.entity import ENTITY_TYPE_LABELS, DetectedEntity, MaskingStrategy


class RedactMasker(BaseMasker):
    strategy = MaskingStrategy.REDACT

    def mask(self, entity: DetectedEntity, context_id: str | None = None) -> str:
        label = ENTITY_TYPE_LABELS.get(entity.entity_type, entity.entity_type.value)
        return f"[{label}]"

    def restore(self, masked_value: str, context_id: str | None = None) -> str | None:
        return None
