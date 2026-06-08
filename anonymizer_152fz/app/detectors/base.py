"""Базовый класс детектора."""

from abc import ABC, abstractmethod

from app.models.entity import DetectedEntity


class BaseDetector(ABC):
    """Абстрактный детектор персональных данных."""

    name: str = "base"

    @abstractmethod
    def detect(self, text: str) -> list[DetectedEntity]:
        """Возвращает список найденных сущностей с позициями."""
        ...
