"""Модель записи аудита."""

from datetime import datetime
from uuid import UUID, uuid4

from pydantic import BaseModel, Field


class AuditLog(BaseModel):
    """Журнал обработки ПДн (ст. 18.1 152-ФЗ)."""

    audit_id: UUID = Field(default_factory=uuid4)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    operator_id: str
    input_hash: str
    entity_types_found: list[str] = Field(default_factory=list)
    entity_count: int = 0
    strategy_used: str
    processing_time_ms: int
    legal_basis: str
    dry_run: bool = False
