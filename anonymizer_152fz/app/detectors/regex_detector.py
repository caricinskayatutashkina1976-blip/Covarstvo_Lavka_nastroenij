"""Детектор на регулярных выражениях."""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from typing import Any

import yaml

from app.detectors.base import BaseDetector
from app.models.entity import DetectedEntity, EntityType

_FLAG_MAP = {
    "IGNORECASE": re.IGNORECASE,
    "MULTILINE": re.MULTILINE,
    "DOTALL": re.DOTALL,
}


class RegexDetector(BaseDetector):
    """Загружает паттерны из YAML и ищет совпадения."""

    name = "regex"

    def __init__(
        self,
        patterns_file: Path,
        redis_client: Any | None = None,
        cache_ttl: int = 3600,
    ) -> None:
        self.patterns_file = patterns_file
        self.redis_client = redis_client
        self.cache_ttl = cache_ttl
        self._compiled: list[tuple[EntityType, re.Pattern[str], float]] | None = None

    def _cache_key(self) -> str:
        stat = self.patterns_file.stat()
        digest = hashlib.sha256(
            f"{self.patterns_file}:{stat.st_mtime}:{stat.st_size}".encode()
        ).hexdigest()[:16]
        return f"anonymizer:regex:{digest}"

    def _load_yaml(self) -> dict[str, Any]:
        with open(self.patterns_file, encoding="utf-8") as f:
            return yaml.safe_load(f) or {}

    def _compile_patterns(self) -> list[tuple[EntityType, re.Pattern[str], float]]:
        if self._compiled is not None:
            return self._compiled

        if self.redis_client is not None:
            cached = self.redis_client.get(self._cache_key())
            if cached:
                data = json.loads(cached)
                self._compiled = [
                    (EntityType(item["type"]), re.compile(item["regex"], item.get("flags", 0)), item["confidence"])
                    for item in data
                ]
                return self._compiled

        raw = self._load_yaml().get("patterns", {})
        compiled: list[tuple[EntityType, re.Pattern[str], float]] = []
        cache_payload: list[dict[str, Any]] = []

        for type_name, entries in raw.items():
            try:
                entity_type = EntityType[type_name]
            except KeyError:
                continue
            for entry in entries:
                flags = 0
                for flag_name in entry.get("flags", "").split("|") if isinstance(entry.get("flags"), str) else []:
                    flag_name = flag_name.strip()
                    if flag_name in _FLAG_MAP:
                        flags |= _FLAG_MAP[flag_name]
                if isinstance(entry.get("flags"), str) and entry["flags"] in _FLAG_MAP:
                    flags |= _FLAG_MAP[entry["flags"]]

                pattern = re.compile(entry["regex"], flags)
                confidence = float(entry.get("confidence", 0.8))
                compiled.append((entity_type, pattern, confidence))
                cache_payload.append({
                    "type": entity_type.value,
                    "regex": entry["regex"],
                    "flags": flags,
                    "confidence": confidence,
                })

        if self.redis_client is not None and cache_payload:
            self.redis_client.setex(
                self._cache_key(),
                self.cache_ttl,
                json.dumps(cache_payload, ensure_ascii=False),
            )

        self._compiled = compiled
        return compiled

    def detect(self, text: str) -> list[DetectedEntity]:
        entities: list[DetectedEntity] = []
        for entity_type, pattern, confidence in self._compile_patterns():
            for match in pattern.finditer(text):
                entities.append(
                    DetectedEntity(
                        start=match.start(),
                        end=match.end(),
                        entity_type=entity_type,
                        value=match.group(0),
                        confidence=confidence,
                        detector_name=self.name,
                    )
                )
        return entities
