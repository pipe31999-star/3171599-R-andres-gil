import React from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ totalVideos }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🎬 Plataforma de Streaming de Video</h1>
        <p className="subtitle">Sistema de Gestión CRUD de Contenido Multimedia</p>
        <div className="stats">
          <span className="stat-badge">
            Total de Videos: <strong>{totalVideos}</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
