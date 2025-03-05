import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { movieService } from '../services/api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import { toast } from 'react-toastify';
import '../styles/Movies.css';

const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await movieService.getAllMovies();
      setMovies(response.data);
      setFilteredMovies(response.data);
      
      // Extract unique genres from movies
      const uniqueGenres = [...new Set(response.data.map(movie => movie.genre))];
      setGenres(uniqueGenres);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      toast.error('Failed to load movies');
      setLoading(false);
    }
  };

  useEffect(() => {
    // Apply filters whenever selectedGenre or searchTerm changes
    let result = movies;
    
    // Filter by genre if selected
    if (selectedGenre) {
      result = result.filter(movie => movie.genre === selectedGenre);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(term) || 
        (movie.description && movie.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredMovies(result);
  }, [selectedGenre, searchTerm, movies]);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleWatchMovie = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  if (loading) {
    return <div className="loading">Loading movies...</div>;
  }

  return (
    <div className="movies-container">
      <h1 className="page-title">Movies</h1>
      
      <div className="movies-filters">
        <SearchBar onSearch={handleSearch} />
        <GenreFilter 
          genres={genres} 
          selectedGenre={selectedGenre} 
          onGenreSelect={handleGenreSelect} 
        />
      </div>
      
      {filteredMovies.length === 0 ? (
        <div className="no-movies">
          <p>No movies found matching your criteria.</p>
        </div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onWatch={handleWatchMovie} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;