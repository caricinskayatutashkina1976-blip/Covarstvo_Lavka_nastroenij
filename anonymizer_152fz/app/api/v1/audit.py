"""API журнала аудита (ст. 18.1 152-ФЗ)."""

from datetime import datetime

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session
from app.db.repositories.audit_repo import AuditRepository
from app.models.response import AuditLogResponse, AuditLogsPage

router = APIRouter(prefix="/audit", tags=["audit"])


@router.get("/logs", response_model=AuditLogsPage)
async def get_audit_logs(
    date_from: str | None = Query(None),
    date_to: str | None = Query(None),
    entity_type: str | None = Query(None),
    operator_id: str | None = Query(None),
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1, le=200),
    session: AsyncSession = Depends(get_session),
) -> AuditLogsPage:
    repo = AuditRepository(session)
    dt_from = datetime.fromisoformat(date_from) if date_from else None
    dt_to = datetime.fromisoformat(date_to) if date_to else None
    items, total = await repo.list_logs(
        date_from=dt_from,
        date_to=dt_to,
        entity_type=entity_type,
        operator_id=operator_id,
        page=page,
        page_size=page_size,
    )
    return AuditLogsPage(
        items=[
            AuditLogResponse(
                audit_id=log.audit_id,
                timestamp=log.timestamp.isoformat(),
                operator_id=log.operator_id,
                input_hash=log.input_hash,
                entity_types_found=log.entity_types_found,
                entity_count=log.entity_count,
                strategy_used=log.strategy_used,
                processing_time_ms=log.processing_time_ms,
                legal_basis=log.legal_basis,
            )
            for log in items
        ],
        total=total,
        page=page,
        page_size=page_size,
    )
