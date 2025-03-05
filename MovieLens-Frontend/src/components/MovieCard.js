import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, onWatch }) => {
  return (
    <div className="movie-card">
      <div className="movie-image-container">
        <img 
          src={movie.imageUrl || 'https://via.placeholder.com/300x450?text=No+Image'} 
          alt={movie.title} 
          className="movie-image"
        />
        <div className="movie-overlay">
          <button className="watch-btn" onClick={() => onWatch(movie)}>
            Watch Now
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-genre">{movie.genre}</span>
          <span className="movie-year">{movie.release_year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;