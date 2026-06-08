"""SQLAlchemy-модели."""

from datetime import datetime
from uuid import uuid4

from sqlalchemy import DateTime, Integer, JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.database import Base


class AuditLogORM(Base):
    __tablename__ = "audit_logs"

    audit_id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid4()))
    timestamp: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, index=True)
    operator_id: Mapped[str] = mapped_column(String(128), index=True)
    input_hash: Mapped[str] = mapped_column(String(64))
    entity_types_found: Mapped[list[str]] = mapped_column(JSON, default=list)
    entity_count: Mapped[int] = mapped_column(Integer, default=0)
    strategy_used: Mapped[str] = mapped_column(String(32))
    processing_time_ms: Mapped[int] = mapped_column(Integer)
    legal_basis: Mapped[str] = mapped_column(Text)
    dry_run: Mapped[bool] = mapped_column(default=False)


class PseudonymMappingORM(Base):
    __tablename__ = "pseudonym_mappings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    context_id: Mapped[str] = mapped_column(String(64), index=True)
    masked_value: Mapped[str] = mapped_column(String(128), index=True)
    encrypted_original: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
