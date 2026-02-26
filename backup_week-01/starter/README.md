## Plataforma de streaming — Código fuente

Este archivo muestra el código principal del ejemplo (TypeScript) para que se visualice directamente en GitHub.

```typescript
/* =====================================================
	 PLATAFORMA DE STREAMING DE VIDEO
	 CATEGORÍA: ENTRETENIMIENTO Y MEDIOS
	 =====================================================
	 Qué: Simula una plataforma de streaming de video
	 Para qué: Gestionar contenido multimedia y usuarios
	 Impacto: Base funcio nal para apps de entretenimiento
	 ===================================================== */

/* ---------------------------
	 TYPE LITERALS Y UNIONS
	 --------------------------- */

type ContentType = "movie" | "series" | "documentary"
type SubscriptionPlan = "free" | "standard" | "premium"

interface Video {
	id: number
	title: string
	duration: number
	type: ContentType
	isAvailable: boolean
}

interface User {
	id: number
	name: string
	plan: SubscriptionPlan
	watchList: Video[]
}

const videos: Video[] = [
	{ id: 1, title: "Inception", duration: 148, type: "movie", isAvailable: true },
	{ id: 2, title: "Planet Earth", duration: 50, type: "documentary", isAvailable: true },
	{ id: 3, title: "Breaking Code", duration: 45, type: "series", isAvailable: false }
]

const user: User = {
	id: 1,
	name: "Santi",
	plan: "standard",
	watchList: []
}

function listAvailableVideos(videos: Video[]): Video[] {
	return videos.filter(video => video.isAvailable)
}

function addToWatchList(user: User, video: Video): void {
	user.watchList.push(video)
}

function showWatchList(user: User): void {
	console.log(`📺 Watchlist de ${user.name} (${user.plan}):`)

	if (user.watchList.length === 0) {
		console.log("No hay contenido en la lista de reproducción.")
		return
	}

	user.watchList.forEach(video => {
		console.log(`- ${video.title} | ${video.type} | ${video.duration} min`)
	})
}

const availableVideos: Video[] = listAvailableVideos(videos)

if (availableVideos.length > 0) {
	addToWatchList(user, availableVideos[0]!)
}

showWatchList(user)
```

Instrucciones rápidas:

1. Instalar dependencias: `pnpm install`
2. Ejecutar: `pnpm start`

