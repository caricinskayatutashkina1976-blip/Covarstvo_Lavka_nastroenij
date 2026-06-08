"""Celery-задачи batch-обработки."""

from __future__ import annotations

from time import perf_counter
from uuid import uuid4

from app.core.audit_logger import AuditLogger
from app.models.entity import EntityType, MaskingStrategy
from app.models.request import AnonymizeBatchRequest
from app.services.anonymize_service import AnonymizeService
from app.tasks.celery_app import celery_app


@celery_app.task(bind=True, name="anonymize.batch")
def process_batch_task(self, payload: dict) -> dict:
    request = AnonymizeBatchRequest(**payload)
    service = AnonymizeService()
    audit_logger = AuditLogger()
    timer = perf_counter()
    total = len(request.texts)
    results = []

    for i, text in enumerate(request.texts):
        entity_types = None
        if request.entity_types:
            entity_types = [
                EntityType(t) if isinstance(t, str) else t for t in request.entity_types
            ]
        item = service.process_batch_item(
            i,
            text,
            request.strategy,
            entity_types,
            request.dry_run,
            request.return_entities,
        )
        results.append(item.model_dump(mode="json"))
        self.update_state(state="PROGRESS", meta={"progress": i + 1, "total": total})

    combined_hash_input = "|".join(request.texts)
    strategy = request.strategy or MaskingStrategy.REDACT
    audit_id = str(uuid4())
    elapsed = int((perf_counter() - timer) * 1000)

    return {
        "results": results,
        "total": total,
        "processing_time_ms": elapsed,
        "audit_id": audit_id,
        "input_hash": audit_logger.hash_input(combined_hash_input),
        "strategy": strategy.value,
    }
