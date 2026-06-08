from app.middleware.chatbot import ChatBotAnonymizerMiddleware
from app.models.entity import EntityType, MaskingStrategy


class MockLLMChain:
    def invoke(self, inputs: dict, **kwargs):
        text = inputs.get("input", "")
        return f"Ответ для: {text}"


def test_middleware_anonymize_input():
    middleware = ChatBotAnonymizerMiddleware(
        strategy=MaskingStrategy.PSEUDONYMIZE,
        entity_types=[EntityType.NAME, EntityType.PHONE],
    )
    original = "Меня зовут Иван Петров, телефон +7 900 123-45-67"
    safe = middleware.anonymize_input(original)
    assert "Иван Петров" not in safe
    assert "+7 900 123-45-67" not in safe


def test_middleware_wrap_mock_llm():
    middleware = ChatBotAnonymizerMiddleware(strategy=MaskingStrategy.PSEUDONYMIZE)
    chain = middleware.wrap(MockLLMChain())
    result = chain.invoke({"input": "Меня зовут Иван Петров"})
    assert isinstance(result, str)


def test_pseudonymize_reversibility_in_middleware():
    middleware = ChatBotAnonymizerMiddleware(strategy=MaskingStrategy.PSEUDONYMIZE)
    safe_input = middleware.anonymize_input("Контакт: Иван Петров")
    pseudonymizer = middleware.service.masking.get_pseudonymizer()
    for token in pseudonymizer._session_cache:
        restored = pseudonymizer.restore(token)
        assert restored == "Иван Петров"
