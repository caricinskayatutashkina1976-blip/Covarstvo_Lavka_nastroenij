from app.core.masker import MaskingService
from app.maskers.generalize import GeneralizeMasker
from app.maskers.pseudonymize import PseudonymizeMasker
from app.maskers.redact import RedactMasker
from app.maskers.tokenize import TokenizeMasker
from app.models.entity import DetectedEntity, EntityType, MaskingStrategy


def _entity(value: str, entity_type: EntityType, start: int = 0) -> DetectedEntity:
    return DetectedEntity(
        start=start,
        end=start + len(value),
        entity_type=entity_type,
        value=value,
        confidence=0.95,
        detector_name="test",
    )


def test_redact_masker():
    masker = RedactMasker()
    result = masker.mask(_entity("Иван Петров", EntityType.NAME))
    assert result == "[ФИО]"


def test_pseudonymize_masker_stable():
    masker = PseudonymizeMasker("secret-key-for-tests-32b!")
    e = _entity("Иван Петров", EntityType.NAME)
    first = masker.mask(e)
    second = masker.mask(e)
    assert first == second
    assert first.startswith("Субъект_")


def test_pseudonymize_reversible():
    masker = PseudonymizeMasker("secret-key-for-tests-32b!")
    e = _entity("Иван Петров", EntityType.NAME)
    masked = masker.mask(e, context_id="ctx-1")
    restored = masker.restore(masked, context_id="ctx-1")
    assert restored == "Иван Петров"


def test_pseudonymize_restore_text():
    masker = PseudonymizeMasker("secret-key-for-tests-32b!")
    e = _entity("Иван", EntityType.NAME)
    masked = masker.mask(e)
    text = f"Меня зовут {masked}"
    restored = masker.restore_text(text)
    assert "Иван" in restored


def test_generalize_birth_date():
    masker = GeneralizeMasker()
    result = masker.mask(_entity("14.03.1985", EntityType.BIRTH_DATE))
    assert "1980-е" in result


def test_tokenize_unique_tokens():
    masker = TokenizeMasker()
    e = _entity("+79001234567", EntityType.PHONE)
    t1 = masker.mask(e)
    t2 = masker.mask(_entity("+79007654321", EntityType.PHONE))
    assert t1 != t2
    assert t1.startswith("PHONE_")


def test_masking_service_apply():
    service = MaskingService()
    text = "Позвоните Ивану Петрову по номеру +7 900 123-45-67"
    entities = [
        _entity("Ивану Петрову", EntityType.NAME, 9),
        _entity("+7 900 123-45-67", EntityType.PHONE, 33),
    ]
    result, found = service.apply(text, entities, strategy=MaskingStrategy.REDACT)
    assert "[ФИО]" in result
    assert "[PHONE]" in result
    assert len(found) == 2


def test_dry_run_keeps_text():
    service = MaskingService()
    text = "Email: test@mail.ru"
    entities = [_entity("test@mail.ru", EntityType.EMAIL, 7)]
    result, _ = service.apply(text, entities, dry_run=True)
    assert result == text
