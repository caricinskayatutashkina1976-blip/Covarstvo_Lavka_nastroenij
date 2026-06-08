"""Стратегия TOKENIZE — UUID-маппинг."""

from __future__ import annotations

import uuid
from typing import TYPE_CHECKING

from app.maskers.base import BaseMasker
from app.models.entity import DetectedEntity, MaskingStrategy

if TYPE_CHECKING:
    from app.db.repositories.mapping_repo import MappingRepository


class TokenizeMasker(BaseMasker):
    strategy = MaskingStrategy.TOKENIZE

    def __init__(self, mapping_repo: MappingRepository | None = None) -> None:
        self.mapping_repo = mapping_repo
        self._session_cache: dict[str, str] = {}

    def mask(self, entity: DetectedEntity, context_id: str | None = None) -> str:
        cache_key = f"{entity.entity_type.value}:{entity.value}"
        if cache_key in self._session_cache:
            return self._session_cache[cache_key]

        token = f"{entity.entity_type.value}_{uuid.uuid4().hex[:8]}"
        self._session_cache[token] = entity.value

        if self.mapping_repo and context_id:
            self.mapping_repo.store_sync(context_id, token, entity.value)

        return token

    def restore(self, masked_value: str, context_id: str | None = None) -> str | None:
        for token, original in self._session_cache.items():
            if token == masked_value:
                return original
        if self.mapping_repo and context_id:
            return self.mapping_repo.get_sync(context_id, masked_value)
        return None
