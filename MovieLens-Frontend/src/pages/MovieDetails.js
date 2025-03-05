import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieService, ratingService } from '../services/api';
import RatingForm from '../components/RatingForm';
import RatingsList from '../components/RatingsList';
import { toast } from 'react-toastify';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Get user data from session storage
        const userDataFromStorage = JSON.parse(sessionStorage.getItem('userData'));
        setUserData(userDataFromStorage);
        
        // Fetch movie details
        const movieResponse = await movieService.getMovieById(id);
        setMovie(movieResponse.data);
        
        // Fetch ratings for this movie
        const ratingsResponse = await ratingService.getRatingsForMovie(id);
        setRatings(ratingsResponse.data);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError('Failed to load movie details. Please try again later.');
        setLoading(false);
        toast.error('Failed to load movie details');
      }
    };
    
    fetchData();
  }, [id]);

  const handleRatingAdded = async () => {
    try {
      // Refresh ratings after a new one is added
      const ratingsResponse = await ratingService.getRatingsForMovie(id);
      setRatings(ratingsResponse.data);
    } catch (err) {
      console.error('Error refreshing ratings:', err);
    }
  };

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!movie) {
    return <div className="error-message">Movie not found</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </div>
      
      <div className="movie-details-content">
        <div className="movie-poster">
          <img 
            src={movie.imageUrl || 'https://via.placeholder.com/300x450?text=No+Image'} 
            alt={movie.title} 
          />
        </div>
        
        <div className="movie-info-details">
          <h1 className="movie-title">{movie.title}</h1>
          
          <div className="movie-meta">
            <span className="movie-year">{movie.release_year}</span>
            <span className="movie-genre">{movie.genre}</span>
          </div>
          
          <div className="movie-description">
            <h3>Overview</h3>
            <p>{movie.description || 'No description available.'}</p>
          </div>
          
          {userData && userData.isLoggedIn ? (
            <RatingForm movieId={id} onRatingAdded={handleRatingAdded} />
          ) : (
            <div className="login-prompt">
              <p>Please <a href="/login">login</a> to rate this movie</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="movie-ratings-section">
        <RatingsList ratings={ratings} />
      </div>
    </div>
  );
};

export default MovieDetails;