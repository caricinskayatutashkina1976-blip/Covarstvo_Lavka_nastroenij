"""Репозиторий зашифрованных маппингов псевдонимов."""

from __future__ import annotations

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker
from sqlalchemy.orm import Session

from app.core.encryption import Encryptor
from app.db.models import PseudonymMappingORM


class MappingRepository:
    """Хранит AES-256 зашифрованные оригинальные значения."""

    def __init__(
        self,
        encryptor: Encryptor,
        session_factory: async_sessionmaker[AsyncSession] | None = None,
        sync_session: Session | None = None,
    ) -> None:
        self.encryptor = encryptor
        self.session_factory = session_factory
        self._sync_session = sync_session
        self._memory: dict[tuple[str, str], str] = {}

    def store_sync(self, context_id: str, masked: str, original: str) -> None:
        encrypted = self.encryptor.encrypt(original)
        self._memory[(context_id, masked)] = original
        if self._sync_session is not None:
            existing = self._sync_session.execute(
                select(PseudonymMappingORM).where(
                    PseudonymMappingORM.context_id == context_id,
                    PseudonymMappingORM.masked_value == masked,
                )
            ).scalar_one_or_none()
            if existing is None:
                self._sync_session.add(
                    PseudonymMappingORM(
                        context_id=context_id,
                        masked_value=masked,
                        encrypted_original=encrypted,
                    )
                )
                self._sync_session.commit()

    def get_sync(self, context_id: str, masked: str) -> str | None:
        if (context_id, masked) in self._memory:
            return self._memory[(context_id, masked)]
        if self._sync_session is not None:
            row = self._sync_session.execute(
                select(PseudonymMappingORM).where(
                    PseudonymMappingORM.context_id == context_id,
                    PseudonymMappingORM.masked_value == masked,
                )
            ).scalar_one_or_none()
            if row:
                return self.encryptor.decrypt(row.encrypted_original)
        return None

    async def store(self, context_id: str, masked: str, original: str) -> None:
        if not self.session_factory:
            self.store_sync(context_id, masked, original)
            return
        encrypted = self.encryptor.encrypt(original)
        async with self.session_factory() as session:
            session.add(
                PseudonymMappingORM(
                    context_id=context_id,
                    masked_value=masked,
                    encrypted_original=encrypted,
                )
            )
            await session.commit()
        self._memory[(context_id, masked)] = original

    async def get(self, context_id: str, masked: str) -> str | None:
        return self.get_sync(context_id, masked)
