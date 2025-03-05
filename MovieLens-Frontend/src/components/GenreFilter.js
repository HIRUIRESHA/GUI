import React from 'react';
import '../styles/GenreFilter.css';

const GenreFilter = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <div className="genre-filter">
      <h3>Filter by Genre</h3>
      <div className="genre-buttons">
        <button 
          className={selectedGenre === '' ? 'genre-btn active' : 'genre-btn'} 
          onClick={() => onGenreSelect('')}
        >
          All
        </button>
        {genres.map((genre) => (
          <button 
            key={genre} 
            className={selectedGenre === genre ? 'genre-btn active' : 'genre-btn'} 
            onClick={() => onGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;