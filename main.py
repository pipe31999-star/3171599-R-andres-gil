from fastapi import FastAPI
from routers import categories, videos

app = FastAPI(title="API Plataforma de Streaming")

app.include_router(categories.router)
app.include_router(videos.router)
