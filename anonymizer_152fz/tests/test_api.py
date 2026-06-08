import pytest

from app.core.audit_logger import AuditLogger
from app.core.encryption import Encryptor
from app.models.entity import EntityType, MaskingStrategy


@pytest.mark.asyncio
async def test_health(client):
    response = await client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert "status" in data
    assert "detectors" in data


@pytest.mark.asyncio
async def test_anonymize_text(client):
    payload = {
        "text": "Позвоните Ивану Петрову по номеру +7 900 123-45-67",
        "strategy": "REDACT",
        "return_entities": True,
    }
    response = await client.post("/api/v1/anonymize/text", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "anonymized_text" in data
    assert "audit_id" in data
    assert data["processing_time_ms"] >= 0
    assert len(data["entities_found"]) >= 1


@pytest.mark.asyncio
async def test_anonymize_dry_run(client):
    payload = {
        "text": "Email ivan@test.ru",
        "dry_run": True,
        "return_entities": True,
    }
    response = await client.post("/api/v1/anonymize/text", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "ivan@test.ru" in data["anonymized_text"]
    assert data["dry_run"] is True


@pytest.mark.asyncio
async def test_anonymize_entity_filter(client):
    payload = {
        "text": "Иван Петров, +7 900 123-45-67",
        "entity_types": ["PHONE"],
        "return_entities": True,
    }
    response = await client.post("/api/v1/anonymize/text", json=payload)
    data = response.json()
    for entity in data["entities_found"]:
        assert entity["entity_type"] == "PHONE"


@pytest.mark.asyncio
async def test_audit_logs(client):
    await client.post(
        "/api/v1/anonymize/text",
        json={"text": "test@example.com", "return_entities": False},
    )
    response = await client.get("/api/v1/audit/logs")
    assert response.status_code == 200
    data = response.json()
    assert "items" in data
    assert data["total"] >= 1
    if data["items"]:
        log = data["items"][0]
        assert "input_hash" in log
        assert "value" not in log


@pytest.mark.asyncio
async def test_batch_limit(client):
    response = await client.post(
        "/api/v1/anonymize/batch",
        json={"texts": ["a"] * 1001},
    )
    assert response.status_code == 413


def test_audit_hash_no_pdn():
    text = "Секретные данные Ивана"
    h = AuditLogger.hash_input(text)
    assert "Иван" not in h
    assert len(h) == 64


def test_encryption_roundtrip():
    enc = Encryptor("secret-key-for-tests-32b!")
    original = "+79001234567"
    token = enc.encrypt(original)
    assert enc.decrypt(token) == original
