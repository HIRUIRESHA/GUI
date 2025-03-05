import express from 'express';
import { 
    getAllMovies, 
    getMovieById, 
    createMovie, 
    deleteMovie, 
    filterMovies 
} from '../controllers/movieController.js';

const router = express.Router();

// Get all movies
router.get('/get-movies', getAllMovies);

// Get a single movie by ID
router.get('/get-movie/:id', getMovieById);

// Create a new movie
router.post('/create-movie', createMovie);

// Delete a movie by ID
router.delete('/delete-movie/:id', deleteMovie);

// Filter movies based on query parameters (e.g., genre, release year)
router.get('/filter-movies', filterMovies);

export default router;
