# 🎬 Plataforma de Streaming de Video - CRUD System

## 📋 Descripción del Proyecto

Esta es una aplicación React + TypeScript que implementa un sistema CRUD completo para gestionar contenido multimedia de una plataforma de streaming de video. El dominio asignado es **Entretenimiento y Medios**, con enfoque en la gestión de videos/contenido.

### Características Principales

- ✅ **Visualizar Lista de Videos**: Muestra todos los videos en tarjetas interactivas con información detallada
- ✅ **Agregar Nuevos Videos**: Formulario completo con validación de campos
- ✅ **Editar Videos Existentes**: Modo de edición que pre-llena el formulario
- ✅ **Eliminar Videos**: Botón de eliminación con confirmación
- ✅ **Indicadores Visuales**: Badges de disponibilidad y calificaciones con código de color
- ✅ **Validación de Datos**: Validación robusta de campos requeridos y tipos de datos
- ✅ **Responsive Design**: Funciona perfectamente en dispositivos móviles y desktop

---

## 🏗️ Estructura de Componentes

```
App (componente principal con estado CRUD)
├── Header (título, descripción y estadísticas)
├── VideoForm (formulario para agregar/editar videos)
│   ├── Inputs tipados
│   ├── Validación de campos
│   ├── Botón Submit
│   └── Botón Cancel (al editar)
├── VideoList (contenedor de lista de videos)
│   └── VideoCard × N (tarjeta individual)
│       ├── Información del video
│       ├── Botón Editar
│       └── Botón Eliminar
└── Footer
```

---

## 📁 Estructura de Archivos

```
WEEK 02/
├── README.md                          # Este archivo
├── package.json                        # Dependencias y scripts
├── tsconfig.json                       # Configuración TypeScript
├── tsconfig.node.json                  # Configuración TS para Vite
├── vite.config.ts                      # Configuración Vite
├── .gitignore                          # Archivos ignorados por Git
├── index.html                          # HTML base
└── src/
    ├── main.tsx                        # Punto de entrada
    ├── App.tsx                         # Componente principal
    ├── types/
    │   └── index.ts                    # Interfaces y tipos
    ├── components/
    │   ├── Header.tsx                  # Encabezado
    │   ├── VideoForm.tsx               # Formulario agregar/editar
    │   ├── VideoList.tsx               # Contenedor de lista
    │   ├── VideoCard.tsx               # Tarjeta individual
    │   ├── SearchBar.tsx               # Búsqueda y filtrado
    │   └── Stats.tsx                   # Estadísticas
    └── styles/
        └── App.css                     # Estilos globales
```

---

## 🎯 Entidades Principales

### Interface `Video`

```typescript
interface Video {
  id: number;                    // ID único (generado con Date.now())
  title: string;                 // Título del video
  genre: string;                 // Género (Acción, Comedia, Drama, etc.)
  duration: number;              // Duración en minutos
  rating: number;                // Calificación de 0 a 10
  available: boolean;            // Disponibilidad
  releaseDate: string;           // Fecha de lanzamiento (YYYY-MM-DD)
  description: string;           // Descripción del contenido
}
```

### Géneros Disponibles

- Acción
- Comedia
- Drama
- Terror
- Ciencia Ficción
- Animación
- Documental

---

## 🛠️ Operaciones CRUD Implementadas

### Create (Crear)
```typescript
const handleAddVideo = (videoData: VideoFormData) => {
  const newVideo: Video = {
    ...videoData,
    id: Date.now()
  };
  setVideos([...videos, newVideo]); // Usando spread operator
};
```

### Read (Leer)
Los videos se renderizan mediante `.map()` en `VideoList`, mostrando todos los videos almacenados.

### Update (Actualizar)
```typescript
const handleUpdateVideo = (id: number, videoData: VideoFormData) => {
  setVideos(
    videos.map(video =>
      video.id === id ? { ...video, ...videoData } : video
    )
  );
};
```

### Delete (Eliminar)
```typescript
const handleDeleteVideo = (id: number) => {
  setVideos(videos.filter(video => video.id !== id));
};
```

---

## 📝 Validación de Datos

El formulario incluye validación para:

- **Título**: Campo requerido, no puede estar vacío
- **Género**: Campo requerido, selección obligatoria
- **Duración**: Debe ser un número mayor a 0
- **Calificación**: Debe estar entre 0 y 10
- **Descripción**: Campo requerido, no puede estar vacía
- **Fecha de Lanzamiento**: Campo de fecha (opcional)
- **Disponibilidad**: Checkbox booleano

---

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js (v16 o superior)
- pnpm o npm

### Pasos de Instalación

```bash
# 1. Navega al directorio del proyecto
cd "WEEK 02"

# 2. Instala las dependencias
pnpm install
# o
npm install

# 3. Inicia el servidor de desarrollo
pnpm dev
# o
npm run dev

# 4. Abre tu navegador en http://localhost:5173
```

### Build para Producción

```bash
pnpm build
# o
npm run build
```

---

## 💡 Características Técnicas

### TypeScript Estricto

- ✅ Todas las interfaces definidas (`Video`, `VideoFormData`, props de componentes)
- ✅ Tipos explícitos en funciones y parámetros
- ✅ No se utiliza `any` en ningún lado
- ✅ Props tipadas correctamente con interfaces

### React Moderno

- ✅ Componentes funcionales con `React.FC`
- ✅ Hooks: `useState` para estado local, `useEffect` para efectos
- ✅ Eventos sintéticos tipados (`React.ChangeEvent<HTMLInputElement>`)
- ✅ Formularios controlados con `value` y `onChange`
- ✅ Keys únicas en listas usando `id`

### Inmutabilidad

- ✅ Spread operator (`...`) para crear nuevos arrays/objetos
- ✅ `.map()` para actualizar elementos
- ✅ `.filter()` para eliminar elementos
- ✅ NUNCA se usa `push()`, `splice()` o mutación directa

### Estilo y UX

- ✅ Diseño moderno y limpio
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Transiciones suaves y efectos hover
- ✅ Feedback visual (badges, colores de estado)
- ✅ Confirmación antes de eliminar
- ✅ Estado vacío manejado correctamente

---

## 📊 Datos Iniciales

La aplicación viene con 3 videos de ejemplo:

1. **Aventura en las Montañas** (Acción, 128 min, 8.5/10)
2. **Reír Sin Fin** (Comedia, 95 min, 7.2/10)
3. **Historias del Corazón** (Drama, 142 min, 8.8/10)

---

## 🎨 Diseño y Colores

La aplicación utiliza un sistema de colores coherente:

- **Primario**: Índigo (`#6366f1`)
- **Secundario**: Rosa (`#ec4899`)
- **Éxito**: Verde (`#10b981`)
- **Advertencia**: Ámbar (`#f59e0b`)
- **Peligro**: Rojo (`#ef4444`)

---

## 📱 Indicadores Visuales

### Badges de Disponibilidad

- ✅ **Disponible**: Badge verde
- ⏸ **No Disponible**: Badge ámbar

### Código de Color de Calificación

- Verde (8-10): Excelente
- Amarillo (6-7.9): Bueno
- Rojo (0-5.9): Regular

---

## ✨ Ejemplo de Uso

### Agregar un Video

1. Completa todos los campos en el formulario
2. Haz clic en "Agregar Video"
3. El video aparecerá inmediatamente en la lista

### Editar un Video

1. Haz clic en el botón "✏️ Editar" de cualquier tarjeta
2. El formulario se pre-llenará con los datos del video
3. Modifica los campos necesarios
4. Haz clic en "Actualizar Video"

### Eliminar un Video

1. Haz clic en el botón "🗑️ Eliminar" de cualquier tarjeta
2. Confirma la eliminación en el diálogo
3. El video será removido de inmediato

---

## 🔍 Decisiones de Diseño

### 1. Generación de IDs
Se usa `Date.now()` como ID único porque es simple y efectiva para este proyecto educativo. En producción, se usaría un generador como UUID.

### 2. Almacenamiento en Estado
Se mantiene todo en el estado de React (`useState`). Para un proyecto real, se integraría una base de datos o API.

### 3. Validación en Cliente
La validación ocurre antes de enviar los datos para mejorar la experiencia del usuario.

### 4. Confirmación de Eliminación
Se pide confirmación antes de eliminar para prevenir accidentes.

### 5. Scroll Automático
Cuando se edita un video, la página scrollea hacia arriba para que el usuario vea el formulario pre-llenado.

---

## 🧮 Estadísticas Implementadas

- Contador total de videos en el header
- Badge de disponibilidad por video
- Calificación visual con estrellas
- Duración en minutos
- Información de lanzamiento formateada

---

## 🚀 Características Futuras (No Implementadas)

Según los requisitos del proyecto, estas características se implementarán en semanas posteriores:

- 🔍 Búsqueda de videos por título
- 🏷️ Filtrado por género o disponibilidad
- 📊 Estadísticas avanzadas (promedio de calificación, etc.)
- 💾 Persistencia en localStorage o API
- 🎯 Categorización y etiquetas

---

## 🐛 Solución de Problemas

### Los estilos no se muestran
Asegúrate de que `App.css` está importado en `App.tsx`:
```typescript
import './App.css';
```

### Los videos no se guardan después de recargar
Es comportamiento esperado. Los datos se guardan solo en el estado de sesión. Para persistencia, implementa localStorage o una API.

### Errores de TypeScript
Verifica que has instalado las dependencias: `pnpm install`

---

## 📚 Recursos Utilizados

- [React Docs - Thinking in React](https://react.dev/learn/thinking-in-react)
- [React Docs - Managing State](https://react.dev/learn/managing-state)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 👨‍💻 Autor

Proyecto desarrollado como parte del bootcamp de programación - Semana 2

---

## 📄 Licencia

Proyecto educativo - Uso libre para propósitos de aprendizaje

---

## ✅ Checklist de Entregables

### Funcionalidad
- [x] Visualizar lista de videos con todas sus propiedades
- [x] Agregar nuevos videos con formulario completo
- [x] Eliminar videos existentes
- [x] Editar videos existentes
- [x] Validación de datos en formularios
- [x] Feedback visual al usuario

### Código
- [x] TypeScript estricto sin errores
- [x] Todas las interfaces definidas
- [x] Componentes bien separados
- [x] Props tipados correctamente
- [x] Estado manejado con useState
- [x] Inmutabilidad en todas las operaciones
- [x] Keys únicas en listas
- [x] Código comentado en partes clave

### UI/UX
- [x] Diseño limpio y organizado
- [x] Responsive (Mobile, Tablet, Desktop)
- [x] Formularios intuitivos
- [x] Botones con hover states
- [x] Estados vacíos manejados
- [x] Indicadores visuales claros

### Documentación
- [x] README actualizado con descripción del dominio
- [x] Instrucciones de instalación y ejecución
- [x] Decisiones de diseño explicadas
- [x] Ejemplos de uso

---

¡Disfrutá desarrollando tu plataforma de streaming! 🎥✨
