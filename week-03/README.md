# API Plataforma de Streaming de Video

## Descripción
API de catálogo para una plataforma de streaming, permite gestionar géneros y videos, realizar búsquedas avanzadas y obtener estadísticas.

## Estructura del Proyecto
- `main.py`: Punto de entrada de la API (FastAPI)
- `models/`: Modelos de datos
- `schemas/`: Esquemas de validación y filtros
- `routers/`: Rutas/endpoints de la API
- `pyproject.toml`, `Dockerfile`, `docker-compose.yml`: Configuración y despliegue

## Instalación y Ejecución
1. Instala dependencias:
   - `poetry install`  (o `pip install fastapi uvicorn` si no usas poetry)
2. Ejecuta el servidor:
   - `poetry run uvicorn main:app --reload`
   - o `uvicorn main:app --reload`
3. Accede a la documentación interactiva:
   - [http://localhost:8000/docs](http://localhost:8000/docs)

## Endpoints Principales
- **Géneros**
  - `GET /genres/` : Listar géneros
  - `POST /genres/` : Crear género
- **Videos**
  - `GET /videos/` : Listar y filtrar videos
  - `POST /videos/` : Crear video
  - `GET /videos/search?q=texto` : Búsqueda full-text
  - `GET /videos/stats` : Estadísticas por género
  - `GET /videos/genre/{genre_id}` : Videos de un género

## Filtros Disponibles en /videos/
- `genre` (id de género)
- `year_gte`, `year_lte` (rango de año)
- `director` (nombre)
- `rating_gte` (mínimo rating)
- `is_available` (disponibilidad)
- `search` (texto en título/director)
- `sort_by` y `order` (campo y orden)

## Ejemplo de Datos de Prueba
### Crear Género
```json
{
  "code": "SCI",
  "name": "Ciencia Ficción",
  "description": "Películas de ciencia ficción",
  "is_family_friendly": false
}
```
### Crear Video
```json
{
  "title": "Matrix",
  "genre_id": 1,
  "year": 1999,
  "duration": 136,
  "director": "Lana Wachowski",
  "rating": 4.8,
  "language": "Inglés",
  "is_available": true
}
```

## Autores
- [Tu Nombre]

---
Entrega lista para evaluación.
