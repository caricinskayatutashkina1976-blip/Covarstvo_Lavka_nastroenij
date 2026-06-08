"""Pydantic-схемы ответов."""

from uuid import UUID

from pydantic import BaseModel, Field

from app.models.entity import EntityType, MaskingStrategy


class FoundEntityResponse(BaseModel):
    entity_type: EntityType
    value: str
    start: int
    end: int
    confidence: float
    strategy_applied: MaskingStrategy | None = None
    detector_name: str | None = None


class AnonymizeTextResponse(BaseModel):
    anonymized_text: str
    entities_found: list[FoundEntityResponse] = Field(default_factory=list)
    processing_time_ms: int
    audit_id: UUID
    dry_run: bool = False


class BatchTaskResponse(BaseModel):
    task_id: str
    status: str
    message: str


class BatchResultItem(BaseModel):
    index: int
    anonymized_text: str
    entities_found: list[FoundEntityResponse] = Field(default_factory=list)
    error: str | None = None


class BatchStatusResponse(BaseModel):
    task_id: str
    status: str
    progress: int = 0
    total: int = 0
    results: list[BatchResultItem] | None = None
    processing_time_ms: int | None = None
    audit_id: UUID | None = None


class AuditLogResponse(BaseModel):
    audit_id: UUID
    timestamp: str
    operator_id: str
    input_hash: str
    entity_types_found: list[str]
    entity_count: int
    strategy_used: str
    processing_time_ms: int
    legal_basis: str


class AuditLogsPage(BaseModel):
    items: list[AuditLogResponse]
    total: int
    page: int
    page_size: int


class HealthResponse(BaseModel):
    status: str
    version: str
    detectors: list[str]
    database: str
    redis: str
