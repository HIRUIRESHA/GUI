import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const movie = location.state; // Get movie data passed from Movie.jsx

  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (userReview && userRating) {
      setReviews([...reviews, { review: userReview, rating: userRating }]);
      setUserReview('');
      setUserRating('');
    }
  };

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="movie-header">
          <h1>{movie.title}</h1>
        </div>

        <div className="movie-content">
          <div className="movie-video-container">
            <video controls className="movie-video">
              <source src={movie.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="movie-info">
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> {movie.rating}/10</p>
            <p><strong>Review:</strong> {movie.description}</p>
          </div>
        </div>

        {/* User Review Section */}
        <div className="user-reviews">
          <h3>Add Your Review</h3>
          <form onSubmit={handleReviewSubmit}>
            <textarea
              placeholder="Write your review here..."
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
            />
            <input
              type="number"
              placeholder="Rating (1-10)"
              min="1"
              max="10"
              value={userRating}
              onChange={(e) => setUserRating(e.target.value)}
            />
            <button type="submit">Submit Review</button>
          </form>

          
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <div key={index} className="review-item">
                <p><strong>Rating:</strong> {rev.rating}/10</p>
                <p>{rev.review}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
