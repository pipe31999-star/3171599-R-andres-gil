import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import Stats from './components/Stats';
import { Video, VideoFormData } from './types';

const App: React.FC = () => {
  // Estado principal: array de videos
  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      title: 'Aventura en las Montañas',
      genre: 'Acción',
      duration: 128,
      rating: 8.5,
      available: true,
      releaseDate: '2024-01-15',
      description: 'Una emocionante aventura a través de las montañas más peligrosas del mundo.'
    },
    {
      id: 2,
      title: 'Reír Sin Fin',
      genre: 'Comedia',
      duration: 95,
      rating: 7.2,
      available: true,
      releaseDate: '2024-02-10',
      description: 'La comedia más hilariante del año te hará reír durante toda la película.'
    },
    {
      id: 3,
      title: 'Historias del Corazón',
      genre: 'Drama',
      duration: 142,
      rating: 8.8,
      available: false,
      releaseDate: '2023-12-20',
      description: 'Un drama emotivo que explora los vínculos familiares más profundos.'
    }
  ]);

  // Estado de edición
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  
  // Estado de búsqueda y filtro
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterGenre, setFilterGenre] = useState<string>('');

  // CRUD: Crear (Add)
  const handleAddVideo = (videoData: VideoFormData) => {
    const newVideo: Video = {
      ...videoData,
      id: Date.now() // Usar timestamp como ID único
    };
    setVideos([...videos, newVideo]);
  };

  // CRUD: Leer (Read) - implícito en el renderizado de videos

  // CRUD: Actualizar (Update)
  const handleUpdateVideo = (id: number, videoData: VideoFormData) => {
    setVideos(
      videos.map(video =>
        video.id === id ? { ...video, ...videoData } : video
      )
    );
    setEditingVideo(null);
  };

  // CRUD: Eliminar (Delete)
  const handleDeleteVideo = (id: number) => {
    setVideos(videos.filter(video => video.id !== id));
    alert('Video eliminado correctamente');
  };

  // Manejar edición
  const handleEditVideo = (video: Video) => {
    setEditingVideo(video);
    // Scroll al formulario
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejar cancelar edición
  const handleCancelEdit = () => {
    setEditingVideo(null);
  };

  // Filtrar videos por búsqueda y género
  const filteredVideos = videos.filter(video => {
    const matchSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenre = filterGenre === '' || video.genre === filterGenre;
    return matchSearch && matchGenre;
  });

  return (
    <div className="app">
      <Header totalVideos={videos.length} />
      
      <main className="app-main">
        <VideoForm
          onAddVideo={handleAddVideo}
          onUpdateVideo={handleUpdateVideo}
          editingVideo={editingVideo}
          onCancelEdit={handleCancelEdit}
        />
        
        <SearchBar 
          onSearch={setSearchTerm} 
          onFilterChange={setFilterGenre}
        />
        
        <Stats videos={filteredVideos} />
        
        <VideoList
          videos={filteredVideos}
          onEditVideo={handleEditVideo}
          onDeleteVideo={handleDeleteVideo}
        />
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Plataforma de Streaming - CRUD de Videos | Proyecto Semanal</p>
      </footer>
    </div>
  );
};

export default App;
