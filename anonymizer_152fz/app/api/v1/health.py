"""Health check endpoint."""

from fastapi import APIRouter

from app.config import get_settings
from app.core.detector import DetectorOrchestrator
from app.models.response import HealthResponse

router = APIRouter(tags=["health"])


@router.get("/health", response_model=HealthResponse)
async def health_check() -> HealthResponse:
    settings = get_settings()
    orchestrator = DetectorOrchestrator(settings)
    db_status = "ok"
    redis_status = "ok"
    try:
        import redis

        r = redis.from_url(settings.redis_url)
        r.ping()
    except Exception:
        redis_status = "unavailable"
    try:
        from app.db.database import engine

        async with engine.connect() as conn:
            await conn.execute(__import__("sqlalchemy").text("SELECT 1"))
    except Exception:
        db_status = "unavailable"

    return HealthResponse(
        status="ok" if db_status == "ok" else "degraded",
        version=settings.app_version,
        detectors=[d.name for d in orchestrator.detectors],
        database=db_status,
        redis=redis_status,
    )
