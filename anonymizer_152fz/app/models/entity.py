"""Типы персональных данных и обнаруженные сущности."""

from enum import Enum

from pydantic import BaseModel, Field


class EntityType(str, Enum):
    """Категории ПДн по 152-ФЗ."""

    NAME = "NAME"
    BIRTH_DATE = "BIRTH_DATE"
    BIRTH_PLACE = "BIRTH_PLACE"
    ADDRESS = "ADDRESS"
    PHONE = "PHONE"
    EMAIL = "EMAIL"
    PASSPORT = "PASSPORT"
    SNILS = "SNILS"
    INN = "INN"
    DRIVER_LICENSE = "DRIVER_LICENSE"
    OMS_POLICY = "OMS_POLICY"
    BANK_CARD = "BANK_CARD"
    BANK_ACCOUNT = "BANK_ACCOUNT"
    IBAN = "IBAN"
    MEDICAL = "MEDICAL"
    NATIONALITY = "NATIONALITY"
    POLITICAL = "POLITICAL"
    RELIGIOUS = "RELIGIOUS"
    IP_ADDRESS = "IP_ADDRESS"
    MAC_ADDRESS = "MAC_ADDRESS"
    SESSION_TOKEN = "SESSION_TOKEN"
    PERSONAL_URL = "PERSONAL_URL"
    ORG = "ORG"
    LOCATION = "LOCATION"


class MaskingStrategy(str, Enum):
    """Стратегии маскирования."""

    REDACT = "REDACT"
    PSEUDONYMIZE = "PSEUDONYMIZE"
    GENERALIZE = "GENERALIZE"
    TOKENIZE = "TOKENIZE"


ENTITY_TYPE_LABELS: dict[EntityType, str] = {
    EntityType.NAME: "ФИО",
    EntityType.BIRTH_DATE: "ДАТА_РОЖДЕНИЯ",
    EntityType.BIRTH_PLACE: "МЕСТО_РОЖДЕНИЯ",
    EntityType.ADDRESS: "АДРЕС",
    EntityType.PHONE: "PHONE",
    EntityType.EMAIL: "EMAIL",
    EntityType.PASSPORT: "ПАСПОРТ",
    EntityType.SNILS: "СНИЛС",
    EntityType.INN: "ИНН",
    EntityType.DRIVER_LICENSE: "ВУ",
    EntityType.OMS_POLICY: "ПОЛИС_ОМС",
    EntityType.BANK_CARD: "BANK_CARD",
    EntityType.BANK_ACCOUNT: "СЧЁТ",
    EntityType.IBAN: "IBAN",
    EntityType.MEDICAL: "МЕДИЦИНСКИЕ_ДАННЫЕ",
    EntityType.NATIONALITY: "НАЦИОНАЛЬНОСТЬ",
    EntityType.POLITICAL: "ПОЛИТИЧЕСКИЕ_ВЗГЛЯДЫ",
    EntityType.RELIGIOUS: "РЕЛИГИЯ",
    EntityType.IP_ADDRESS: "IP",
    EntityType.MAC_ADDRESS: "MAC",
    EntityType.SESSION_TOKEN: "TOKEN",
    EntityType.PERSONAL_URL: "URL",
    EntityType.ORG: "ОРГАНИЗАЦИЯ",
    EntityType.LOCATION: "ЛОКАЦИЯ",
}


class DetectedEntity(BaseModel):
    """Найденная сущность персональных данных."""

    start: int
    end: int
    entity_type: EntityType
    value: str
    confidence: float = Field(ge=0.0, le=1.0)
    detector_name: str

    def overlaps(self, other: "DetectedEntity") -> bool:
        return not (self.end <= other.start or other.end <= self.start)

    def contains(self, other: "DetectedEntity") -> bool:
        return self.start <= other.start and self.end >= other.end
