import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  onFilterChange: (genre: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Buscar videos por título..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <select onChange={handleFilterChange} className="filter-select">
        <option value="">Todos los géneros</option>
        <option value="Acción">Acción</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
        <option value="Animación">Animación</option>
        <option value="Documental">Documental</option>
      </select>
    </div>
  );
};

export default SearchBar;
