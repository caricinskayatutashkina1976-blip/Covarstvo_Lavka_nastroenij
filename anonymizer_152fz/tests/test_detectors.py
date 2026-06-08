from pathlib import Path

import pytest

from app.config import Settings
from app.core.detector import DetectorOrchestrator
from app.detectors.luhn_detector import LuhnDetector, luhn_check
from app.detectors.regex_detector import RegexDetector
from app.models.entity import EntityType

FIXTURES = Path(__file__).parent / "fixtures"


@pytest.fixture
def patterns_file(tmp_path):
    src = Path(__file__).resolve().parents[1] / "rules" / "patterns_ru.yaml"
    dest = tmp_path / "patterns_ru.yaml"
    dest.write_text(src.read_text(encoding="utf-8"), encoding="utf-8")
    return dest


def test_luhn_valid_card():
    assert luhn_check("4111111111111111") is True


def test_luhn_invalid_card():
    assert luhn_check("4111111111111112") is False


def test_luhn_detector_finds_card():
    detector = LuhnDetector()
    text = "Оплата картой 4111 1111 1111 1111 завершена"
    entities = detector.detect(text)
    assert len(entities) == 1
    assert entities[0].entity_type == EntityType.BANK_CARD


def test_regex_detector_phone(patterns_file):
    detector = RegexDetector(patterns_file)
    text = "Позвоните по номеру +7 900 123-45-67"
    entities = detector.detect(text)
    types = {e.entity_type for e in entities}
    assert EntityType.PHONE in types


def test_regex_detector_email(patterns_file):
    detector = RegexDetector(patterns_file)
    entities = detector.detect("Пишите на test.user@example.com")
    assert any(e.entity_type == EntityType.EMAIL for e in entities)


def test_regex_detector_snils(patterns_file):
    detector = RegexDetector(patterns_file)
    entities = detector.detect("СНИЛС: 123-456-789 01")
    assert any(e.entity_type == EntityType.SNILS for e in entities)


def test_regex_detector_name(patterns_file):
    detector = RegexDetector(patterns_file)
    entities = detector.detect("Клиент Иван Петров подписал договор")
    assert any(e.entity_type == EntityType.NAME for e in entities)


def test_false_positive_plain_number_not_phone(patterns_file):
    detector = RegexDetector(patterns_file)
    entities = detector.detect("В заказе 12 позиций на сумму 9001234567 рублей")
    phone_entities = [e for e in entities if e.entity_type == EntityType.PHONE]
    assert len(phone_entities) == 0


def test_orchestrator_merges_overlaps(patterns_file):
    settings = Settings(
        patterns_file=patterns_file,
        anonymizer_enable_ner=False,
        anonymizer_confidence_threshold=0.85,
    )
    orchestrator = DetectorOrchestrator(settings=settings)
    text = (FIXTURES / "sample_document.txt").read_text(encoding="utf-8")
    entities = orchestrator.detect(text)
    assert len(entities) >= 5
    types = {e.entity_type for e in entities}
    assert EntityType.EMAIL in types
    assert EntityType.PHONE in types
