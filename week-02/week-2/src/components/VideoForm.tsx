import React, { useState, useEffect } from 'react';
import { VideoFormProps, VideoFormData } from '../types';

const VideoForm: React.FC<VideoFormProps> = ({
  onAddVideo,
  onUpdateVideo,
  editingVideo,
  onCancelEdit
}) => {
  const [formData, setFormData] = useState<VideoFormData>({
    title: '',
    genre: '',
    duration: 0,
    rating: 5,
    available: true,
    releaseDate: new Date().toISOString().split('T')[0],
    description: ''
  });

  const [errors, setErrors] = useState<Partial<VideoFormData>>({});

  // Pre-llenar formulario cuando se está editando
  useEffect(() => {
    if (editingVideo) {
      const { id, ...rest } = editingVideo;
      setFormData(rest);
    }
  }, [editingVideo]);

  // Validar formulario
  const validateForm = (): boolean => {
    const newErrors: Partial<VideoFormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido' as any;
    }
    if (!formData.genre.trim()) {
      newErrors.genre = 'El género es requerido' as any;
    }
    if (formData.duration <= 0) {
      newErrors.duration = 'La duración debe ser mayor a 0' as any;
    }
    if (formData.rating < 0 || formData.rating > 10) {
      newErrors.rating = 'La calificación debe estar entre 0 y 10' as any;
    }
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida' as any;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseFloat(value) : value
    }));
    
    // Limpiar errores del campo cuando el usuario empieza a escribir
    if (errors[name as keyof VideoFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Manejar submit del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Por favor, completa todos los campos correctamente');
      return;
    }

    if (editingVideo) {
      // Actualizar video existente
      onUpdateVideo(editingVideo.id, formData);
      alert('Video actualizado correctamente');
    } else {
      // Agregar nuevo video
      onAddVideo(formData);
      alert('Video agregado correctamente');
    }

    // Limpiar formulario
    setFormData({
      title: '',
      genre: '',
      duration: 0,
      rating: 5,
      available: true,
      releaseDate: new Date().toISOString().split('T')[0],
      description: ''
    });
    setErrors({});
  };

  // Manejar cancelar edición
  const handleCancel = () => {
    setFormData({
      title: '',
      genre: '',
      duration: 0,
      rating: 5,
      available: true,
      releaseDate: new Date().toISOString().split('T')[0],
      description: ''
    });
    setErrors({});
    onCancelEdit();
  };

  return (
    <div className="form-container">
      <h2>{editingVideo ? '✏️ Editar Video' : '➕ Agregar Nuevo Video'}</h2>
      <form onSubmit={handleSubmit} className="video-form">
        <div className="form-group">
          <label htmlFor="title">Título *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ej: Aventura Épica"
            className={errors.title ? 'input-error' : ''}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="genre">Género *</label>
            <select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className={errors.genre ? 'input-error' : ''}
            >
              <option value="">Selecciona un género</option>
              <option value="Acción">Acción</option>
              <option value="Comedia">Comedia</option>
              <option value="Drama">Drama</option>
              <option value="Terror">Terror</option>
              <option value="Ciencia Ficción">Ciencia Ficción</option>
              <option value="Animación">Animación</option>
              <option value="Documental">Documental</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duración (minutos) *</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              min="1"
              placeholder="120"
              className={errors.duration ? 'input-error' : ''}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rating">Calificación (0-10) *</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="10"
              step="0.5"
              className={errors.rating ? 'input-error' : ''}
            />
          </div>

          <div className="form-group">
            <label htmlFor="releaseDate">Fecha de Lanzamiento</label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe el contenido del video..."
            rows={4}
            className={errors.description ? 'input-error' : ''}
          />
        </div>

        <div className="form-group checkbox">
          <label htmlFor="available">
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={formData.available}
              onChange={handleChange}
            />
            Disponible
          </label>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {editingVideo ? 'Actualizar Video' : 'Agregar Video'}
          </button>
          {editingVideo && (
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
