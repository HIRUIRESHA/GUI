import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ratingService } from '../services/api';
import '../styles/RatingForm.css';

const RatingForm = ({ movieId, onRatingAdded }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!rating) {
      toast.error('Please select a rating');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Get user data from session storage
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      if (!userData || !userData.userData || !userData.userData.id) {
        toast.error('You must be logged in to rate movies');
        return;
      }

      const ratingData = {
        user_id: userData.userData.id,
        movie_id: movieId,
        rating: rating,
        review: review
      };

      await ratingService.createRating(ratingData);
      toast.success('Rating submitted successfully!');
      
      // Reset form
      setRating(5);
      setReview('');
      
      // Notify parent component
      if (onRatingAdded) {
        onRatingAdded();
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast.error(error.response?.data?.message || 'Failed to submit rating');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rating-form-container">
      <h3>Rate This Movie</h3>
      <form onSubmit={handleSubmit} className="rating-form">
        <div className="form-group">
          <label>Your Rating (1-10):</label>
          <select 
            value={rating} 
            onChange={(e) => setRating(Number(e.target.value))}
            className="rating-select"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Your Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            className="review-textarea"
            rows={4}
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-rating-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Rating'}
        </button>
      </form>
    </div>
  );
};

export default RatingForm;