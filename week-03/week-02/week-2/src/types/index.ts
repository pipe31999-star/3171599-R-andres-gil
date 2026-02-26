// Interfaz para Video - dominio de plataforma de streaming
export interface Video {
  id: number;
  title: string;
  genre: string;
  duration: number; // en minutos
  rating: number; // 0-10
  available: boolean;
  releaseDate: string;
  description: string;
}

// Tipo para el estado del formulario (usado en agregar/editar)
export type VideoFormData = Omit<Video, 'id'>;

// Props para componentes
export interface HeaderProps {
  totalVideos: number;
}

export interface VideoFormProps {
  onAddVideo: (video: VideoFormData) => void;
  onUpdateVideo: (id: number, video: VideoFormData) => void;
  editingVideo: Video | null;
  onCancelEdit: () => void;
}

export interface VideoListProps {
  videos: Video[];
  onEditVideo: (video: Video) => void;
  onDeleteVideo: (id: number) => void;
}

export interface VideoCardProps {
  video: Video;
  onEdit: (video: Video) => void;
  onDelete: (id: number) => void;
}
