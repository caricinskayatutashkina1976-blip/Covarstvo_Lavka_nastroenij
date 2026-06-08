"""Стратегия GENERALIZE — обобщение значений."""

import re

from app.maskers.base import BaseMasker
from app.models.entity import DetectedEntity, EntityType, MaskingStrategy


class GeneralizeMasker(BaseMasker):
    strategy = MaskingStrategy.GENERALIZE

    def mask(self, entity: DetectedEntity, context_id: str | None = None) -> str:
        if entity.entity_type == EntityType.BIRTH_DATE:
            return self._generalize_date(entity.value)
        if entity.entity_type == EntityType.PHONE:
            return "[PHONE_РФ]"
        if entity.entity_type == EntityType.EMAIL:
            return "[EMAIL]"
        if entity.entity_type == EntityType.NAME:
            return "[ФИО]"
        if entity.entity_type == EntityType.ADDRESS:
            return "[АДРЕС_РФ]"
        if entity.entity_type == EntityType.BANK_CARD:
            return "[BANK_CARD]"
        return f"[{entity.entity_type.value}]"

    def _generalize_date(self, value: str) -> str:
        match = re.search(r"(19|20)(\d{2})", value)
        if match:
            decade = int(match.group(2))
            decade_start = (decade // 10) * 10
            return f"{match.group(1)}{decade_start:02d}-е"
        return "[ДАТА]"

    def restore(self, masked_value: str, context_id: str | None = None) -> str | None:
        return None
