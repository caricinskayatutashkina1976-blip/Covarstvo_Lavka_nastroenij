"""Логирование операций для 152-ФЗ (ст. 18.1)."""

import hashlib
from time import perf_counter
from uuid import uuid4

from app.config import Settings, get_settings
from app.db.repositories.audit_repo import AuditRepository
from app.models.audit import AuditLog
from app.models.entity import DetectedEntity, MaskingStrategy


class AuditLogger:
    """Создаёт записи аудита без сохранения оригинальных ПДн."""

    def __init__(self, settings: Settings | None = None) -> None:
        self.settings = settings or get_settings()

    @staticmethod
    def hash_input(text: str) -> str:
        return hashlib.sha256(text.encode("utf-8")).hexdigest()

    def build_log(
        self,
        text: str,
        entities: list[DetectedEntity],
        strategy: MaskingStrategy,
        processing_time_ms: int,
        operator_id: str | None = None,
        legal_basis: str | None = None,
        dry_run: bool = False,
    ) -> AuditLog:
        entity_types = sorted({e.entity_type.value for e in entities})
        return AuditLog(
            audit_id=uuid4(),
            operator_id=operator_id or self.settings.default_operator_id,
            input_hash=self.hash_input(text),
            entity_types_found=entity_types,
            entity_count=len(entities),
            strategy_used=strategy.value,
            processing_time_ms=processing_time_ms,
            legal_basis=legal_basis or self.settings.default_legal_basis,
            dry_run=dry_run,
        )

    async def persist(self, repo: AuditRepository, log: AuditLog) -> AuditLog:
        return await repo.create(log)


class TimedOperation:
    def __init__(self) -> None:
        self._start = perf_counter()

    @property
    def elapsed_ms(self) -> int:
        return int((perf_counter() - self._start) * 1000)
