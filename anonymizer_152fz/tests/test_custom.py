from pathlib import Path

from app.core.audit_logger import AuditLogger, TimedOperation
from app.core.exceptions import AnonymizerError, BatchLimitError
from app.detectors.custom_detector import CustomDetector
from app.models.entity import EntityType, MaskingStrategy


def test_custom_detector(tmp_path):
    rules = tmp_path / "custom.yaml"
    rules.write_text(
        """
patterns:
  CUSTOM_EMPLOYEE_ID:
    - regex: 'EMP-\\d{6}'
      confidence: 0.99
entity_type_mapping:
  CUSTOM_EMPLOYEE_ID: SESSION_TOKEN
""",
        encoding="utf-8",
    )
    detector = CustomDetector(rules)
    entities = detector.detect("Сотрудник EMP-123456 зарегистрирован")
    assert len(entities) == 1
    assert entities[0].entity_type == EntityType.SESSION_TOKEN


def test_audit_logger_build():
    logger = AuditLogger()
    from app.models.entity import DetectedEntity

    entities = [
        DetectedEntity(
            start=0, end=5, entity_type=EntityType.EMAIL,
            value="a@b.c", confidence=0.9, detector_name="regex",
        )
    ]
    log = logger.build_log("test@mail.ru", entities, MaskingStrategy.REDACT, 10)
    assert log.entity_count == 1
    assert "test@mail.ru" not in log.input_hash


def test_timed_operation():
    op = TimedOperation()
    assert op.elapsed_ms >= 0


def test_batch_limit_error():
    err = BatchLimitError()
    assert err.status_code == 413


def test_anonymizer_error():
    err = AnonymizerError("test", 400, "test-error")
    assert err.message == "test"
