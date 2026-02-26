from pydantic import BaseModel
from typing import Optional

class GenreCreate(BaseModel):
    code: str
    name: str
    description: Optional[str] = None
    is_family_friendly: bool

class GenreOut(GenreCreate):
    id: int
