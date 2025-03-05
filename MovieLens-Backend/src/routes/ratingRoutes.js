import express from 'express';
import { 
    createRating, 
    getRatingsForMovie, 
    deleteRating 
} from '../controllers/ratingController.js';

const router = express.Router();

// Create a rating for a movie
router.post('/create-rating', createRating);

// Get all ratings for a specific movie
router.get('/get-ratings/:movieId', getRatingsForMovie);

// Delete a rating by ID
router.delete('/delete-rating/:id', deleteRating);

export default router;
