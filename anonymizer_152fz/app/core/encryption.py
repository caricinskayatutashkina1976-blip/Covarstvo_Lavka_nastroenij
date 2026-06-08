"""AES-256 шифрование маппингов псевдонимов."""

import base64
import hashlib

from cryptography.fernet import Fernet


def derive_fernet_key(secret: str) -> bytes:
    """Производный ключ Fernet (AES-128 CBC + HMAC) из секрета."""
    digest = hashlib.sha256(secret.encode()).digest()
    return base64.urlsafe_b64encode(digest)


class Encryptor:
    """Шифрование значений перед сохранением в БД."""

    def __init__(self, secret_key: str) -> None:
        self._fernet = Fernet(derive_fernet_key(secret_key))

    def encrypt(self, value: str) -> str:
        return self._fernet.encrypt(value.encode()).decode()

    def decrypt(self, token: str) -> str:
        return self._fernet.decrypt(token.encode()).decode()
