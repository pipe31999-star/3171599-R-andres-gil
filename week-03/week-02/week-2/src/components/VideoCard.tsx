import React from 'react';
import { VideoCardProps } from '../types';

const VideoCard: React.FC<VideoCardProps> = ({ video, onEdit, onDelete }) => {
  // Función auxiliar para determinar color de calificación
  const getRatingColor = (rating: number): string => {
    if (rating >= 8) return '#4CAF50'; // Verde
    if (rating >= 6) return '#FFC107'; // Amarillo
    return '#FF6B6B'; // Rojo
  };

  // Función auxiliar para determinar badge de disponibilidad
  const getAvailabilityBadge = (): JSX.Element => {
    return video.available ? (
      <span className="badge badge-success">✓ Disponible</span>
    ) : (
      <span className="badge badge-warning">⏸ No Disponible</span>
    );
  };

  return (
    <div className="video-card">
      <div className="video-card-header">
        <h3>{video.title}</h3>
        {getAvailabilityBadge()}
      </div>

      <div className="video-card-body">
        <div className="video-info-row">
          <span className="label">Género:</span>
          <span className="value">{video.genre}</span>
        </div>

        <div className="video-info-row">
          <span className="label">Duración:</span>
          <span className="value">{video.duration} min</span>
        </div>

        <div className="video-info-row">
          <span className="label">Calificación:</span>
          <span className="value rating" style={{ color: getRatingColor(video.rating) }}>
            ★ {video.rating}/10
          </span>
        </div>

        <div className="video-info-row">
          <span className="label">Lanzamiento:</span>
          <span className="value">{new Date(video.releaseDate).toLocaleDateString('es-ES')}</span>
        </div>

        <div className="video-description">
          <p>{video.description}</p>
        </div>
      </div>

      <div className="video-card-footer">
        <button
          onClick={() => onEdit(video)}
          className="btn btn-edit"
          title="Editar video"
        >
          ✏️ Editar
        </button>
        <button
          onClick={() => {
            if (confirm(`¿Estás seguro de que deseas eliminar "${video.title}"?`)) {
              onDelete(video.id);
            }
          }}
          className="btn btn-delete"
          title="Eliminar video"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
