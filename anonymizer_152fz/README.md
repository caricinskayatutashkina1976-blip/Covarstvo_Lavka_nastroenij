# Anonymizer 152-FZ

Полнофункциональная система автоматической деперсонализации (пилинга) персональных данных в соответствии с **Федеральным законом № 152-ФЗ «О персональных данных»**.

## Возможности

- Обнаружение 20+ категорий ПДн (regex, NER, Luhn)
- 4 стратегии маскирования: REDACT, PSEUDONYMIZE, GENERALIZE, TOKENIZE
- REST API (FastAPI + OpenAPI/Swagger)
- Batch-обработка через Celery
- Журнал аудита без хранения оригинальных ПДн (только SHA-256)
- AES-256 шифрование маппингов псевдонимов
- Middleware для чат-ботов (LangChain / OpenAI)
- Режим `dry_run` — показать найденные ПДн без маскирования

## Соответствие 152-ФЗ

| Компонент | Статья ФЗ-152 |
|-----------|---------------|
| Определение категорий ПДн | ст. 3 п. 1 |
| Правовые основания обработки | ст. 6 |
| Специальные категории ПДн | ст. 10 |
| Журнал аудита | ст. 18.1 |
| Меры защиты (шифрование, маскирование) | ст. 19 |
| Минимизация хранения ПДн | ст. 5 п. 5 |

## Поддерживаемые типы ПДн

| Тип | Описание |
|-----|----------|
| NAME | ФИО |
| BIRTH_DATE | Дата рождения |
| BIRTH_PLACE | Место рождения |
| ADDRESS | Адрес |
| PHONE | Телефон |
| EMAIL | Email |
| PASSPORT | Паспорт |
| SNILS | СНИЛС |
| INN | ИНН физлица |
| DRIVER_LICENSE | Водительское удостоверение |
| OMS_POLICY | Полис ОМС/ДМС |
| BANK_CARD | Банковская карта (Luhn) |
| BANK_ACCOUNT | Расчётный счёт |
| IBAN | IBAN |
| MEDICAL | Медицинские данные |
| NATIONALITY | Национальность |
| POLITICAL | Политические взгляды |
| RELIGIOUS | Религиозные убеждения |
| IP_ADDRESS | IPv4/IPv6 |
| MAC_ADDRESS | MAC-адрес |
| SESSION_TOKEN | Токены/cookie |
| PERSONAL_URL | URL с личными параметрами |

## Быстрый старт (Docker Compose)

```bash
cd anonymizer_152fz
cp .env.example .env
docker compose up --build
```

API: http://localhost:8000/docs

## Локальный запуск

```bash
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

Для NER (опционально):

```bash
pip install natasha
python -m spacy download ru_core_news_lg
```

## Примеры curl

### Анонимизация текста

```bash
curl -X POST http://localhost:8000/api/v1/anonymize/text \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Позвоните Ивану Петрову по номеру +7 900 123-45-67",
    "strategy": "REDACT",
    "return_entities": true
  }'
```

### Dry run

```bash
curl -X POST http://localhost:8000/api/v1/anonymize/text \
  -H "Content-Type: application/json" \
  -d '{"text": "Иван Петров, ivan@test.ru", "dry_run": true}'
```

### Batch (асинхронно)

```bash
curl -X POST http://localhost:8000/api/v1/anonymize/batch \
  -H "Content-Type: application/json" \
  -d '{"texts": ["Текст 1", "Текст 2"]}'

curl http://localhost:8000/api/v1/anonymize/batch/{task_id}
```

### Журнал аудита

```bash
curl "http://localhost:8000/api/v1/audit/logs?page=1&page_size=20"
```

## ChatBot Middleware

```python
from app.middleware.chatbot import ChatBotAnonymizerMiddleware
from app.models.entity import EntityType, MaskingStrategy

middleware = ChatBotAnonymizerMiddleware(
    strategy=MaskingStrategy.PSEUDONYMIZE,
    entity_types=[EntityType.NAME, EntityType.PHONE, EntityType.EMAIL],
)

chain = middleware.wrap(llm_chain)
response = chain.invoke({"input": "Меня зовут Иван, телефон 89001234567"})
```

## Конфигурация

| Переменная | Описание | По умолчанию |
|------------|----------|--------------|
| ANONYMIZER_STRATEGY | REDACT / PSEUDONYMIZE / GENERALIZE / TOKENIZE | REDACT |
| ANONYMIZER_CONFIDENCE_THRESHOLD | Порог уверенности | 0.85 |
| ANONYMIZER_AUDIT_RETENTION_DAYS | Срок хранения логов | 1095 (3 года) |
| ANONYMIZER_PSEUDONYM_SECRET_KEY | Ключ AES для псевдонимов | — |
| DB_URL | PostgreSQL | — |
| REDIS_URL | Redis | — |

## Тесты

```bash
pytest
```

Покрытие: > 80%.

## Правовые основания

- **ст. 6** — обработка ПДн на основании договора, согласия субъекта или иных оснований (поле `legal_basis` в API)
- **ст. 10** — особые условия для специальных категорий (медицинские, политические, религиозные)
- **ст. 18.1** — обязанность оператора вести учёт обработки (журнал аудита)
- **ст. 19** — технические меры защиты (маскирование, шифрование, отсутствие ПДн в логах)

## Архитектура

```
anonymizer_152fz/
├── app/           # FastAPI, детекторы, маскировщики, API
├── rules/         # YAML-паттерны regex
├── tests/         # pytest (>80% coverage)
├── docker-compose.yml
└── Dockerfile
```

## Важно

- **Никогда** не логируются оригинальные ПДн — только SHA-256 хэш входного текста
- Маппинги псевдонимов шифруются AES-256 (Fernet)
- Ошибки API возвращаются в формате RFC 7807 (Problem Details)
- Rate limiting: 100 запросов/мин на IP
