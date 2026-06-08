"""Стратегия PSEUDONYMIZE — обратимые псевдонимы."""

from __future__ import annotations

import hashlib
import re
from typing import TYPE_CHECKING

from app.maskers.base import BaseMasker
from app.models.entity import DetectedEntity, EntityType, MaskingStrategy

if TYPE_CHECKING:
    from app.db.repositories.mapping_repo import MappingRepository


class PseudonymizeMasker(BaseMasker):
    strategy = MaskingStrategy.PSEUDONYMIZE

    def __init__(
        self,
        secret_key: str,
        mapping_repo: MappingRepository | None = None,
    ) -> None:
        self.secret_key = secret_key
        self.mapping_repo = mapping_repo
        self._session_cache: dict[str, str] = {}
        self._reverse_cache: dict[str, str] = {}

    def _stable_suffix(self, value: str, entity_type: EntityType) -> str:
        digest = hashlib.sha256(f"{self.secret_key}:{entity_type.value}:{value}".encode()).hexdigest()
        return digest[:4].upper()

    def _pseudonym_for_name(self, entity: DetectedEntity) -> str:
        suffix = self._stable_suffix(entity.value, entity.entity_type)
        return f"Субъект_{suffix}"

    def _pseudonym_default(self, entity: DetectedEntity) -> str:
        suffix = self._stable_suffix(entity.value, entity.entity_type)
        return f"{entity.entity_type.value}_{suffix}"

    def mask(self, entity: DetectedEntity, context_id: str | None = None) -> str:
        if entity.entity_type == EntityType.NAME:
            masked = self._pseudonym_for_name(entity)
        else:
            masked = self._pseudonym_default(entity)

        self._session_cache[masked] = entity.value
        self._reverse_cache[entity.value] = masked

        if self.mapping_repo and context_id:
            self.mapping_repo.store_sync(context_id, masked, entity.value)

        return masked

    def restore(self, masked_value: str, context_id: str | None = None) -> str | None:
        if masked_value in self._session_cache:
            return self._session_cache[masked_value]
        if self.mapping_repo and context_id:
            return self.mapping_repo.get_sync(context_id, masked_value)
        return None

    def restore_text(self, text: str, context_id: str | None = None) -> str:
        """Восстанавливает псевдонимы в тексте."""
        result = text
        pattern = re.compile(
            r"(Субъект_[A-F0-9]{4}|[A-Z_]+_[A-F0-9]{4})"
        )
        for match in pattern.finditer(text):
            original = self.restore(match.group(0), context_id)
            if original:
                result = result.replace(match.group(0), original)
        return result
