"""Базовый класс маскировщика."""

from abc import ABC, abstractmethod

from app.models.entity import DetectedEntity, EntityType, MaskingStrategy


class BaseMasker(ABC):
    strategy: MaskingStrategy

    @abstractmethod
    def mask(self, entity: DetectedEntity, context_id: str | None = None) -> str:
        ...

    @abstractmethod
    def restore(self, masked_value: str, context_id: str | None = None) -> str | None:
        ...
