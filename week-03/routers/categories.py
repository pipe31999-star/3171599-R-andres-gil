from fastapi import APIRouter
from schemas.category import GenreCreate, GenreOut
from typing import List

router = APIRouter(prefix="/genres", tags=["Genres"])

genres_db = []

def get_next_id():
    return len(genres_db) + 1

@router.get("/", response_model=List[GenreOut])
def list_genres():
    return genres_db

@router.post("/", response_model=GenreOut)
def create_genre(genre: GenreCreate):
    new_genre = genre.dict()
    new_genre["id"] = get_next_id()
    genres_db.append(new_genre)
    return new_genre
