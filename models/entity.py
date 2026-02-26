from pydantic import BaseModel
from typing import Optional

class Video(BaseModel):
    id: int
    title: str
    genre_id: int
    year: int
    duration: int  # minutos
    director: str
    rating: float
    language: str
    is_available: bool
