import React from 'react';
import '../styles/RatingsList.css';

const RatingsList = ({ ratings }) => {
  if (!ratings || ratings.length === 0) {
    return (
      <div className="no-ratings">
        <p>No ratings yet. Be the first to rate this movie!</p>
      </div>
    );
  }

  return (
    <div className="ratings-list">
      <h3>User Ratings & Reviews</h3>
      {ratings.map((rating, index) => (
        <div key={index} className="rating-item">
          <div className="rating-header">
            <div className="rating-score">{rating.rating}/10</div>
            <div className="rating-user">by {rating.username || 'Anonymous User'}</div>
          </div>
          {rating.review && (
            <div className="rating-review">
              <p>{rating.review}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RatingsList;