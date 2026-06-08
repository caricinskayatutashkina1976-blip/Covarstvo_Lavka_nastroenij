"""Middleware для анонимизации сообщений чат-ботов."""

from __future__ import annotations

import json
from typing import Any, Callable
from uuid import uuid4

from app.models.entity import EntityType, MaskingStrategy
from app.models.request import AnonymizeTextRequest
from app.services.anonymize_service import AnonymizeService


class ChatBotAnonymizerMiddleware:
    """
    Перехватывает входящие сообщения, анонимизирует ПДн перед LLM,
    восстанавливает псевдонимы в ответе (PSEUDONYMIZE).
    """

    def __init__(
        self,
        strategy: MaskingStrategy = MaskingStrategy.PSEUDONYMIZE,
        entity_types: list[EntityType] | None = None,
        service: AnonymizeService | None = None,
    ) -> None:
        self.strategy = strategy
        self.entity_types = entity_types
        self.service = service or AnonymizeService()
        self.context_id = str(uuid4())

    def anonymize_input(self, text: str) -> str:
        req = AnonymizeTextRequest(
            text=text,
            strategy=self.strategy,
            entity_types=self.entity_types,
            return_entities=False,
        )
        return self.service.process_text(req).anonymized_text

    def restore_output(self, text: str) -> str:
        if self.strategy != MaskingStrategy.PSEUDONYMIZE:
            return text
        pseudonymizer = self.service.masking.get_pseudonymizer()
        return pseudonymizer.restore_text(text, self.context_id)

    def wrap(self, chain: Any) -> "_WrappedChain":
        return _WrappedChain(self, chain)

    def invoke_openai(self, client: Any, messages: list[dict], **kwargs: Any) -> Any:
        """Прямая интеграция с OpenAI-совместимым API."""
        safe_messages = []
        for msg in messages:
            content = msg.get("content", "")
            if msg.get("role") == "user" and isinstance(content, str):
                content = self.anonymize_input(content)
            safe_messages.append({**msg, "content": content})
        response = client.chat.completions.create(messages=safe_messages, **kwargs)
        if response.choices:
            choice = response.choices[0]
            if choice.message and choice.message.content:
                choice.message.content = self.restore_output(choice.message.content)
        return response


class _WrappedChain:
    """Обёртка для LangChain-подобных цепочек."""

    def __init__(self, middleware: ChatBotAnonymizerMiddleware, chain: Any) -> None:
        self.middleware = middleware
        self.chain = chain

    def invoke(self, inputs: dict[str, Any], **kwargs: Any) -> Any:
        payload = dict(inputs)
        for key in ("input", "question", "text", "message"):
            if key in payload and isinstance(payload[key], str):
                payload[key] = self.middleware.anonymize_input(payload[key])
                break

        result = self.chain.invoke(payload, **kwargs)

        if isinstance(result, str):
            return self.middleware.restore_output(result)
        if isinstance(result, dict):
            for key in ("output", "text", "answer", "response"):
                if key in result and isinstance(result[key], str):
                    result[key] = self.middleware.restore_output(result[key])
                    break
        return result

    async def ainvoke(self, inputs: dict[str, Any], **kwargs: Any) -> Any:
        if hasattr(self.chain, "ainvoke"):
            payload = dict(inputs)
            for key in ("input", "question", "text", "message"):
                if key in payload and isinstance(payload[key], str):
                    payload[key] = self.middleware.anonymize_input(payload[key])
                    break
            result = await self.chain.ainvoke(payload, **kwargs)
            if isinstance(result, str):
                return self.middleware.restore_output(result)
            return result
        return self.invoke(inputs, **kwargs)


def create_langchain_runnable_wrapper(middleware: ChatBotAnonymizerMiddleware) -> Callable:
    """Фабрика callback для LangChain Runnable."""

    def before_llm(text: str) -> str:
        return middleware.anonymize_input(text)

    def after_llm(text: str) -> str:
        return middleware.restore_output(text)

    return before_llm, after_llm
