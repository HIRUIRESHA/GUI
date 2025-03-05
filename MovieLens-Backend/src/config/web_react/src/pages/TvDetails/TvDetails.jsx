import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './TvDetails.css';

const TvDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const tv = location.state; // Get movie data passed from Movie.jsx

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

  if (!tv) {
    return <h2>Tv show Not Found</h2>;
  }

  return (
    <div className="tv-details-container">
      <div className="tv-details">
        <div className="tv-header">
          <h1>{tv.title}</h1>
        </div>

        <div className="tv-content">
          <div className="tv-video-container">
            <video controls className="tv-video">
              <source src={tv.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="tv-info">
            <p><strong>Year:</strong> {tv.year}</p>
            <p><strong>Rating:</strong> {tv.rating}/10</p>
            <p><strong>Review:</strong> {tv.description}</p>
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

export default TvDetails;
