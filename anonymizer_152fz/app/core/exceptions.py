"""Исключения и RFC 7807 Problem Details."""

from typing import Any

from fastapi import Request
from fastapi.responses import JSONResponse


class AnonymizerError(Exception):
    """Базовое исключение системы."""

    def __init__(
        self,
        message: str,
        status_code: int = 400,
        error_type: str = "anonymizer-error",
        details: dict[str, Any] | None = None,
    ) -> None:
        super().__init__(message)
        self.message = message
        self.status_code = status_code
        self.error_type = error_type
        self.details = details or {}


class DetectionError(AnonymizerError):
    def __init__(self, message: str, details: dict[str, Any] | None = None) -> None:
        super().__init__(message, 422, "detection-error", details)


class MaskingError(AnonymizerError):
    def __init__(self, message: str, details: dict[str, Any] | None = None) -> None:
        super().__init__(message, 422, "masking-error", details)


class BatchLimitError(AnonymizerError):
    def __init__(self, message: str = "Превышен лимит batch-запроса (1000 текстов)") -> None:
        super().__init__(message, 413, "batch-limit-exceeded")


class TaskNotFoundError(AnonymizerError):
    def __init__(self, task_id: str) -> None:
        super().__init__(f"Задача {task_id} не найдена", 404, "task-not-found", {"task_id": task_id})


def problem_response(
    request: Request,
    status: int,
    title: str,
    detail: str,
    error_type: str,
    extra: dict[str, Any] | None = None,
) -> JSONResponse:
    """Формирует ответ в формате RFC 7807."""
    body: dict[str, Any] = {
        "type": f"https://anonymizer.local/errors/{error_type}",
        "title": title,
        "status": status,
        "detail": detail,
        "instance": str(request.url.path),
    }
    if extra:
        body.update(extra)
    return JSONResponse(status_code=status, content=body, media_type="application/problem+json")


async def anonymizer_exception_handler(request: Request, exc: AnonymizerError) -> JSONResponse:
    return problem_response(
        request,
        exc.status_code,
        exc.error_type.replace("-", " ").title(),
        exc.message,
        exc.error_type,
        exc.details,
    )
