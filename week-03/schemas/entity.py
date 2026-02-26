from pydantic import BaseModel
from typing import Optional

class VideoCreate(BaseModel):
    title: str
    genre_id: int
    year: int
    duration: int
    director: str
    rating: float
    language: str
    is_available: bool

class VideoOut(VideoCreate):
    id: int
