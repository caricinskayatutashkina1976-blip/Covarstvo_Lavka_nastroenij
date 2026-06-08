"""NER-детектор через natasha (PER, LOC, ORG)."""

from __future__ import annotations

import logging
from typing import Any

from app.detectors.base import BaseDetector
from app.models.entity import DetectedEntity, EntityType

logger = logging.getLogger(__name__)

_NATASHA_AVAILABLE = False
_Segmenter = _MorphVocab = _NewsEmbedding = _NewsMorphTagger = None
_NewsNERTagger = _Doc = None

try:
    from natasha import (
        Doc,
        NewsEmbedding,
        NewsMorphTagger,
        NewsNERTagger,
        Segmenter,
    )

    _NATASHA_AVAILABLE = True
    _Segmenter = Segmenter
    _NewsEmbedding = NewsEmbedding
    _NewsMorphTagger = NewsMorphTagger
    _NewsNERTagger = NewsNERTagger
    _Doc = Doc
except ImportError:
    logger.warning("natasha не установлена — NER-детектор отключён")


class NERDetector(BaseDetector):
    """Извлечение именованных сущностей на русском языке."""

    name = "ner_natasha"

    _TYPE_MAP = {
        "PER": EntityType.NAME,
        "LOC": EntityType.LOCATION,
        "ORG": EntityType.ORG,
    }

    def __init__(self, enabled: bool = True) -> None:
        self.enabled = enabled and _NATASHA_AVAILABLE
        self._segmenter: Any = None
        self._emb: Any = None
        self._morph_tagger: Any = None
        self._ner_tagger: Any = None
        self._initialized = False

    def _ensure_pipeline(self) -> bool:
        if not self.enabled:
            return False
        if self._initialized:
            return True
        try:
            self._segmenter = _Segmenter()
            self._emb = _NewsEmbedding()
            self._morph_tagger = _NewsMorphTagger(self._emb)
            self._ner_tagger = _NewsNERTagger(self._emb)
            self._initialized = True
            return True
        except Exception as exc:
            logger.error("Ошибка инициализации natasha: %s", exc)
            self.enabled = False
            return False

    def detect(self, text: str) -> list[DetectedEntity]:
        if not self._ensure_pipeline():
            return []

        doc = _Doc(text)
        doc.segment(self._segmenter)
        doc.tag_morph(self._morph_tagger)
        doc.tag_ner(self._ner_tagger)

        entities: list[DetectedEntity] = []
        for span in doc.spans:
            entity_type = self._TYPE_MAP.get(span.type)
            if entity_type is None:
                continue
            entities.append(
                DetectedEntity(
                    start=span.start,
                    end=span.stop,
                    entity_type=entity_type,
                    value=text[span.start : span.stop],
                    confidence=0.92,
                    detector_name=self.name,
                )
            )
        return entities
