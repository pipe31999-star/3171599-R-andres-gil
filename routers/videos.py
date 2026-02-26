# Endpoint para obtener videos de un género específico
@router.get("/genre/{genre_id}", response_model=List[VideoOut])
def videos_by_genre(genre_id: int):
    return [v for v in videos_db if v.get("genre_id") == genre_id]
from collections import Counter
from fastapi import APIRouter, Query
from schemas.entity import VideoCreate, VideoOut
from schemas.filters import VideoFilters
from typing import List, Optional

router = APIRouter(prefix="/videos", tags=["Videos"])

videos_db = []

def get_next_id():
    return len(videos_db) + 1

@router.get("/", response_model=List[VideoOut])
def list_videos(
    genre: Optional[str] = None,
    year_gte: Optional[int] = None,
    year_lte: Optional[int] = None,
    director: Optional[str] = None,
    rating_gte: Optional[float] = None,
    is_available: Optional[bool] = None,
    search: Optional[str] = None,
    sort_by: Optional[str] = None,
    order: Optional[str] = None
):
    filtered = videos_db.copy()
    if genre:
        filtered = [v for v in filtered if v.get("genre_id") == int(genre) or v.get("genre_id") == genre]
    if year_gte is not None:
        filtered = [v for v in filtered if v.get("year", 0) >= year_gte]
    if year_lte is not None:
        filtered = [v for v in filtered if v.get("year", 0) <= year_lte]
    if director:
        filtered = [v for v in filtered if director.lower() in v.get("director", "").lower()]
    if rating_gte is not None:
        filtered = [v for v in filtered if v.get("rating", 0) >= rating_gte]
    if is_available is not None:
        filtered = [v for v in filtered if v.get("is_available") == is_available]
    if search:
        filtered = [v for v in filtered if search.lower() in v.get("title", "").lower() or search.lower() in v.get("director", "").lower()]
    if sort_by:
        reverse = order == "desc"
        filtered.sort(key=lambda v: v.get(sort_by, None), reverse=reverse)
    return filtered

@router.post("/", response_model=VideoOut)
def create_video(video: VideoCreate):
    new_video = video.dict()
    new_video["id"] = get_next_id()
    videos_db.append(new_video)
    return new_video


# Endpoint de búsqueda full-text
@router.get("/search", response_model=List[VideoOut])
def search_videos(q: str):
    q_lower = q.lower()
    return [v for v in videos_db if q_lower in v.get("title", "").lower() or q_lower in v.get("director", "").lower()]

# Endpoint de estadísticas por género
@router.get("/stats")
def stats_by_genre():
    genre_counter = Counter([v.get("genre_id") for v in videos_db])
    return {"total_videos": len(videos_db), "videos_por_genero": dict(genre_counter)}
