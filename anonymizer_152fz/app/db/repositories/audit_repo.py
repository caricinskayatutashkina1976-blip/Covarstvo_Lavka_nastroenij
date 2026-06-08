"""Репозиторий журнала аудита."""

from __future__ import annotations

from datetime import datetime
from uuid import UUID

from sqlalchemy import String, cast, func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models import AuditLogORM
from app.models.audit import AuditLog


class AuditRepository:
    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def create(self, log: AuditLog) -> AuditLog:
        orm = AuditLogORM(
            audit_id=str(log.audit_id),
            timestamp=log.timestamp,
            operator_id=log.operator_id,
            input_hash=log.input_hash,
            entity_types_found=log.entity_types_found,
            entity_count=log.entity_count,
            strategy_used=log.strategy_used,
            processing_time_ms=log.processing_time_ms,
            legal_basis=log.legal_basis,
            dry_run=log.dry_run,
        )
        self.session.add(orm)
        await self.session.commit()
        return log

    async def list_logs(
        self,
        date_from: datetime | None = None,
        date_to: datetime | None = None,
        entity_type: str | None = None,
        operator_id: str | None = None,
        page: int = 1,
        page_size: int = 50,
    ) -> tuple[list[AuditLog], int]:
        query = select(AuditLogORM)
        if date_from:
            query = query.where(AuditLogORM.timestamp >= date_from)
        if date_to:
            query = query.where(AuditLogORM.timestamp <= date_to)
        if operator_id:
            query = query.where(AuditLogORM.operator_id == operator_id)
        if entity_type:
            query = query.where(
                cast(AuditLogORM.entity_types_found, String).like(f'%"{entity_type}"%')
            )

        count_query = select(func.count()).select_from(query.subquery())
        total = (await self.session.execute(count_query)).scalar() or 0

        query = query.order_by(AuditLogORM.timestamp.desc())
        query = query.offset((page - 1) * page_size).limit(page_size)
        rows = (await self.session.execute(query)).scalars().all()

        items = [
            AuditLog(
                audit_id=UUID(row.audit_id),
                timestamp=row.timestamp,
                operator_id=row.operator_id,
                input_hash=row.input_hash,
                entity_types_found=list(row.entity_types_found or []),
                entity_count=row.entity_count,
                strategy_used=row.strategy_used,
                processing_time_ms=row.processing_time_ms,
                legal_basis=row.legal_basis,
                dry_run=row.dry_run,
            )
            for row in rows
        ]
        return items, total
