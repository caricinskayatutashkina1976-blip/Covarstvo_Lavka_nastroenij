"""API анонимизации."""

from datetime import datetime

from fastapi import APIRouter, Depends, File, Request, UploadFile
from fastapi.responses import Response
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import get_settings
from app.core.exceptions import BatchLimitError
from app.limiter import limiter
from app.db.database import get_session
from app.db.repositories.audit_repo import AuditRepository
from app.models.request import AnonymizeBatchRequest, AnonymizeTextRequest
from app.models.response import (
    AnonymizeTextResponse,
    BatchStatusResponse,
    BatchTaskResponse,
)
from app.services.anonymize_service import AnonymizeService
from app.tasks.batch_tasks import process_batch_task

router = APIRouter(prefix="/anonymize", tags=["anonymize"])


def get_service() -> AnonymizeService:
    return AnonymizeService()


@router.post("/text", response_model=AnonymizeTextResponse)
@limiter.limit(get_settings().anonymizer_rate_limit)
async def anonymize_text(
    http_request: Request,
    request: AnonymizeTextRequest,
    service: AnonymizeService = Depends(get_service),
    session: AsyncSession = Depends(get_session),
) -> AnonymizeTextResponse:
    repo = AuditRepository(session)
    return await service.process_text_with_audit(request, repo)


@router.post("/batch", response_model=BatchTaskResponse)
@limiter.limit(get_settings().anonymizer_rate_limit)
async def anonymize_batch(http_request: Request, request: AnonymizeBatchRequest) -> BatchTaskResponse:
    if len(request.texts) > 1000:
        raise BatchLimitError()
    payload = request.model_dump(mode="json")
    task = process_batch_task.delay(payload)
    return BatchTaskResponse(
        task_id=task.id,
        status="PENDING",
        message="Задача поставлена в очередь Celery",
    )


@router.get("/batch/{task_id}", response_model=BatchStatusResponse)
async def get_batch_status(task_id: str) -> BatchStatusResponse:
    from celery.result import AsyncResult

    from app.tasks.celery_app import celery_app

    result = AsyncResult(task_id, app=celery_app)
    if result.state == "PENDING":
        return BatchStatusResponse(task_id=task_id, status="PENDING", progress=0, total=0)
    if result.state == "PROGRESS":
        meta = result.info or {}
        return BatchStatusResponse(
            task_id=task_id,
            status="PROGRESS",
            progress=meta.get("progress", 0),
            total=meta.get("total", 0),
        )
    if result.state == "SUCCESS":
        data = result.result or {}
        return BatchStatusResponse(
            task_id=task_id,
            status="SUCCESS",
            progress=data.get("total", 0),
            total=data.get("total", 0),
            results=data.get("results"),
            processing_time_ms=data.get("processing_time_ms"),
            audit_id=data.get("audit_id"),
        )
    return BatchStatusResponse(task_id=task_id, status=result.state, progress=0, total=0)


@router.post("/document")
async def anonymize_document(
    file: UploadFile = File(...),
    service: AnonymizeService = Depends(get_service),
    session: AsyncSession = Depends(get_session),
) -> Response:
    content = await file.read()
    raw_text = service.extract_text_from_file(file.filename or "document.txt", content)
    req = AnonymizeTextRequest(text=raw_text, return_entities=False)
    repo = AuditRepository(session)
    result = await service.process_text_with_audit(req, repo)
    out_name, out_bytes, media_type = service.build_anonymized_file(
        file.filename or "document.txt",
        result.anonymized_text,
    )
    return Response(
        content=out_bytes,
        media_type=media_type,
        headers={"Content-Disposition": f'attachment; filename="{out_name}"'},
    )
