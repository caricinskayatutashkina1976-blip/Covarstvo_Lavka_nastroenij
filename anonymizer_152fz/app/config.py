"""Конфигурация приложения (pydantic-settings)."""

from functools import lru_cache
from pathlib import Path
from typing import Any

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parent.parent
RULES_DIR = BASE_DIR / "rules"


class Settings(BaseSettings):
    """Настройки системы деперсонализации."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "Anonymizer 152-FZ"
    app_version: str = "1.0.0"
    debug: bool = False

    anonymizer_strategy: str = "REDACT"
    anonymizer_confidence_threshold: float = 0.85
    anonymizer_ner_model: str = "ru_core_news_lg"
    anonymizer_audit_retention_days: int = 1095
    anonymizer_pseudonym_secret_key: str = Field(
        default="change-me-in-production-32bytes!!",
        min_length=16,
    )
    anonymizer_enable_ner: bool = True
    anonymizer_rate_limit: str = "100/minute"

    db_url: str = "postgresql+asyncpg://anonymizer:anonymizer@localhost:5432/anonymizer"
    redis_url: str = "redis://localhost:6379/0"
    celery_broker_url: str = "redis://localhost:6379/1"
    celery_result_backend: str = "redis://localhost:6379/2"

    patterns_file: Path = RULES_DIR / "patterns_ru.yaml"
    custom_rules_file: Path | None = None

    default_legal_basis: str = "ст. 6 ч. 1 п. 5 152-ФЗ — обработка для исполнения договора"
    default_operator_id: str = "system"

    strategy_overrides: dict[str, str] = Field(default_factory=dict)

    @property
    def strategy_overrides_map(self) -> dict[str, str]:
        return {k.upper(): v.upper() for k, v in self.strategy_overrides.items()}


@lru_cache
def get_settings() -> Settings:
    return Settings()


def clear_settings_cache() -> None:
    get_settings.cache_clear()
