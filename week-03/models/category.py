from pydantic import BaseModel
from typing import Optional

class Genre(BaseModel):
    id: int
    code: str
    name: str
    description: Optional[str] = None
    is_family_friendly: bool
