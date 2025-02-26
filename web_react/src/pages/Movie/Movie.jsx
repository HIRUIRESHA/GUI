import React, { useState } from 'react';
import './Movie.css';

const Movie = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const movies = [
    
    { title: 'The Lie', category: 'thriller', video: '/src/assets/the_lie.mp4' },
    { title: 'Annabelle', category: 'horror', video: '/src/assets/annabelle.mp4' },
    { title: 'Hi Nanna', category: 'romance', video: '/src/assets/Hi_nanna.mp4' },
    { title: 'Sabari', category: 'action', video: '/src/assets/sabari.mp4' },
    { title: 'Supercool', category: 'comedy', video: '/src/assets/supercool.mp4' },
    { title: 'San Andreas', category: 'action', video: '/src/assets/san.mp4' },
    { title: 'Homestead', category: 'thriller', video: '/src/assets/homestead.mp4' },
    { title: 'Sita Ramam', category: 'romance', video: '/src/assets/sita_raman.mp4' },
    { title: 'Amaran', category: 'romance', video: '/src/assets/amaran.mp4' },
    { title: 'Sanam Teri Kasam', category: 'romance', video: '/src/assets/sanam.mp4' },
    { title: 'Champions', category: 'comedy', video: '/src/assets/champions.mp4' },
    { title: 'The Nun', category: 'horror', video: '/src/assets/nun.mp4' },
    { title: 'Immaculate', category: 'horror', video: '/src/assets/immaculate.mp4' },
  ];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies
    .filter((movie) => {
      const matchesCategory = category === 'all' || movie.category === category;
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="movie-page">
      <h1>Movie Library</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="categories">
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('horror')}>Horror</button>
        <button onClick={() => handleCategoryChange('romance')}>Romance</button>
        <button onClick={() => handleCategoryChange('action')}>Action</button>
        <button onClick={() => handleCategoryChange('thriller')}>Thriller</button>
        <button onClick={() => handleCategoryChange('comedy')}>Comedy</button>
      </div>

      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index} className="movie-item">
              {movie.video ? (
                <div className="movie-video-container">
                  <video controls className="movie-video" style={{ objectFit: 'cover' }}>
                    <source src={movie.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <img src={movie.image} alt={movie.title} className="movie-image" />
              )}
              <h2>{movie.title}</h2>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Movie;






