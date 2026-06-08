"""Детектор банковских карт с алгоритмом Луна."""

import re

from app.detectors.base import BaseDetector
from app.models.entity import DetectedEntity, EntityType


def luhn_check(number: str) -> bool:
    """Проверка контрольной суммы по алгоритму Луна."""
    digits = [int(d) for d in number if d.isdigit()]
    if len(digits) < 13 or len(digits) > 19:
        return False
    checksum = 0
    parity = len(digits) % 2
    for i, digit in enumerate(digits):
        if i % 2 == parity:
            digit *= 2
            if digit > 9:
                digit -= 9
        checksum += digit
    return checksum % 10 == 0


class LuhnDetector(BaseDetector):
    """Обнаружение PAN банковских карт."""

    name = "luhn"
    _CARD_PATTERN = re.compile(r"\b(?:\d[ -]*?){13,19}\b")

    def detect(self, text: str) -> list[DetectedEntity]:
        entities: list[DetectedEntity] = []
        for match in self._CARD_PATTERN.finditer(text):
            raw = match.group(0)
            digits = re.sub(r"\D", "", raw)
            if 13 <= len(digits) <= 19 and luhn_check(digits):
                entities.append(
                    DetectedEntity(
                        start=match.start(),
                        end=match.end(),
                        entity_type=EntityType.BANK_CARD,
                        value=raw,
                        confidence=0.97,
                        detector_name=self.name,
                    )
                )
        return entities
