from pydantic import BaseModel
from typing import Optional

class VideoFilters(BaseModel):
    genre: Optional[str] = None
    year_gte: Optional[int] = None
    year_lte: Optional[int] = None
    director: Optional[str] = None
    rating_gte: Optional[float] = None
    is_available: Optional[bool] = None
    search: Optional[str] = None
    sort_by: Optional[str] = None
    order: Optional[str] = None  # 'asc' o 'desc'
