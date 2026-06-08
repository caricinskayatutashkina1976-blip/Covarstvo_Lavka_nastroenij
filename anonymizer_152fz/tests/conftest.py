import pytest
import pytest_asyncio
from httpx import ASGITransport, AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.config import Settings, clear_settings_cache, get_settings
from app.db.database import Base, get_session
from app.main import app


@pytest.fixture
def settings(tmp_path, monkeypatch):
    clear_settings_cache()
    patterns = tmp_path / "patterns.yaml"
    patterns.write_text(
        """
patterns:
  PHONE:
    - regex: '(?:\\+7|8)[\\s\\-]?\\(?\\d{3}\\)?[\\s\\-]?\\d{3}[\\s\\-]?\\d{2}[\\s\\-]?\\d{2}'
      confidence: 0.95
  EMAIL:
    - regex: '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}'
      confidence: 0.98
  NAME:
    - regex: '\\b[А-ЯЁ][а-яё]+\\s+[А-ЯЁ][а-яё]+\\b'
      confidence: 0.70
  SNILS:
    - regex: '\\b\\d{3}-\\d{3}-\\d{3}\\s\\d{2}\\b'
      confidence: 0.99
""",
        encoding="utf-8",
    )
    monkeypatch.setenv("DB_URL", "sqlite+aiosqlite:///:memory:")
    monkeypatch.setenv("ANONYMIZER_ENABLE_NER", "false")
    monkeypatch.setenv("ANONYMIZER_CONFIDENCE_THRESHOLD", "0.85")
    monkeypatch.setenv("PATTERNS_FILE", str(patterns))
    clear_settings_cache()
    s = get_settings()
    s.patterns_file = patterns
    s.anonymizer_enable_ner = False
    return s


@pytest_asyncio.fixture
async def db_session(settings):
    engine = create_async_engine("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    factory = async_sessionmaker(engine, expire_on_commit=False)

    async with factory() as session:
        yield session

    await engine.dispose()


@pytest_asyncio.fixture
async def client(db_session):
    async def _override():
        yield db_session

    app.dependency_overrides[get_session] = _override
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac
    app.dependency_overrides.clear()
