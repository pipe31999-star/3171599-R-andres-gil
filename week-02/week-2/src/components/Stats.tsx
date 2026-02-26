import React from 'react';
import { Video } from '../types';

interface StatsProps {
  videos: Video[];
}

const Stats: React.FC<StatsProps> = ({ videos }) => {
  // Calcular estadísticas
  const totalVideos = videos.length;
  const availableVideos = videos.filter(v => v.available).length;
  const totalDuration = videos.reduce((acc, v) => acc + v.duration, 0);
  const averageRating = 
    videos.length > 0 
      ? (videos.reduce((acc, v) => acc + v.rating, 0) / videos.length).toFixed(1)
      : 0;

  const genreStats = videos.reduce((acc: Record<string, number>, video) => {
    acc[video.genre] = (acc[video.genre] || 0) + 1;
    return acc;
  }, {});

  const topGenre = Object.entries(genreStats).sort(([, a], [, b]) => b - a)[0];

  return (
    <div className="stats-container">
      <h2>📊 Estadísticas del Contenido</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total de Videos</p>
          <p className="stat-value">{totalVideos}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Disponibles</p>
          <p className="stat-value">{availableVideos}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Duración Total</p>
          <p className="stat-value">{totalDuration} min</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Calificación Promedio</p>
          <p className="stat-value">★ {averageRating}/10</p>
        </div>
        {topGenre && (
          <div className="stat-card">
            <p className="stat-label">Género Principal</p>
            <p className="stat-value">{topGenre[0]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
