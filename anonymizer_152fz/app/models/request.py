"""Pydantic-схемы запросов."""

from pydantic import BaseModel, Field

from app.models.entity import EntityType, MaskingStrategy


class AnonymizeTextRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=500_000)
    strategy: MaskingStrategy | None = None
    entity_types: list[EntityType] | None = None
    return_entities: bool = True
    dry_run: bool = False
    operator_id: str | None = None
    legal_basis: str | None = None


class AnonymizeBatchRequest(BaseModel):
    texts: list[str] = Field(..., min_length=1, max_length=1000)
    strategy: MaskingStrategy | None = None
    entity_types: list[EntityType] | None = None
    return_entities: bool = True
    dry_run: bool = False
    operator_id: str | None = None
    legal_basis: str | None = None


class AuditLogFilter(BaseModel):
    date_from: str | None = None
    date_to: str | None = None
    entity_type: str | None = None
    operator_id: str | None = None
    page: int = Field(default=1, ge=1)
    page_size: int = Field(default=50, ge=1, le=200)
