import React from 'react';
import { VideoListProps } from '../types';
import VideoCard from './VideoCard';

const VideoList: React.FC<VideoListProps> = ({ videos, onEditVideo, onDeleteVideo }) => {
  // Mostrar mensaje cuando no hay videos
  if (videos.length === 0) {
    return (
      <div className="video-list-empty">
        <div className="empty-state">
          <p className="empty-icon">📹</p>
          <h3>No hay videos disponibles</h3>
          <p>Comienza agregando tu primer video usando el formulario arriba.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-list-container">
      <h2>📺 Lista de Videos ({videos.length})</h2>
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onEdit={onEditVideo}
            onDelete={onDeleteVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
