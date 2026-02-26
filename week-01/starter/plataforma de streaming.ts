/* =====================================================
   PLATAFORMA DE STREAMING DE VIDEO
   CATEGORÍA: ENTRETENIMIENTO Y MEDIOS
   =====================================================
   Qué: Simula una plataforma de streaming de video
   Para qué: Gestionar contenido multimedia y usuarios
   Impacto: Base funcional para apps de entretenimiento
   ===================================================== */

/* ---------------------------
   TYPE LITERALS Y UNIONS
   --------------------------- */

// Qué: Define los tipos de contenido multimedia
// Para qué: Clasificar el contenido de entretenimiento
// Impacto: Control y validación del catálogo
type ContentType = "movie" | "series" | "documentary"

// Qué: Define los planes de suscripción
// Para qué: Regular el acceso al contenido
// Impacto: Segmentación de usuarios
type SubscriptionPlan = "free" | "standard" | "premium"

/* ---------------------------
   INTERFACES
   --------------------------- */

// Qué: Representa un contenido audiovisual
// Para qué: Modelar videos de entretenimiento
// Impacto: Estructura reutilizable para el catálogo
interface Video {
  id: number              // Qué: ID único del contenido
  title: string           // Qué: Título del video
  duration: number        // Qué: Duración en minutos
  type: ContentType       // Qué: Tipo de contenido
  isAvailable: boolean    // Qué: Disponibilidad en la plataforma
}

// Qué: Representa un usuario de la plataforma
// Para qué: Gestionar cuentas y suscripciones
// Impacto: Control del consumo de medios
interface User {
  id: number              // Qué: ID del usuario
  name: string            // Qué: Nombre del usuario
  plan: SubscriptionPlan // Qué: Plan contratado
  watchList: Video[]      // Qué: Lista de reproducción
}

/* ---------------------------
   DATOS INICIALES
   --------------------------- */

// Qué: Catálogo inicial de contenido
// Para qué: Simular una plataforma real de streaming
// Impacto: Permite probar la app sin base de datos
const videos: Video[] = [
  { id: 1, title: "Inception", duration: 148, type: "movie", isAvailable: true },
  { id: 2, title: "Planet Earth", duration: 50, type: "documentary", isAvailable: true },
  { id: 3, title: "Breaking Code", duration: 45, type: "series", isAvailable: false }
]

// Qué: Usuario registrado
// Para qué: Simular interacción con la plataforma
// Impacto: Validación del flujo de usuario
const user: User = {
  id: 1,
  name: "Santi",
  plan: "standard",
  watchList: []
}

/* ---------------------------
   FUNCIONES
   --------------------------- */

// Qué: Obtiene el contenido disponible
// Para qué: Mostrar solo videos accesibles
// Impacto: Mejora la experiencia del usuario
function listAvailableVideos(videos: Video[]): Video[] {
  return videos.filter(video => video.isAvailable)
}

// Qué: Agrega contenido a la lista del usuario
// Para qué: Simular guardado de contenido favorito
// Impacto: Personalización del consumo de medios
function addToWatchList(user: User, video: Video): void {
  user.watchList.push(video)
}

// Qué: Muestra la lista de reproducción del usuario
// Para qué: Visualizar contenido seleccionado
// Impacto: Control y seguimiento del entretenimiento
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

/* ---------------------------
   EJECUCIÓN DEL PROGRAMA
   --------------------------- */

// Qué: Filtra el contenido disponible
// Para qué: Garantizar acceso solo a medios habilitados
// Impacto: Flujo correcto del sistema
const availableVideos: Video[] = listAvailableVideos(videos)

// Qué: Agrega un contenido a la lista
// Para qué: Asegurar salida visible del sistema
// Impacto: Evidencia funcional del programa
if (availableVideos.length > 0) {
  
 
  addToWatchList(user, availableVideos[0]!)

}

// Qué: Muestra el resultado final
// Para qué: Comprobar funcionamiento de la plataforma
// Impacto: Salida completa en consola
showWatchList(user)
