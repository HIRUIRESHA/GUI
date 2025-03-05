import { pool } from "../config/db.js";

// Function to create a rating for a movie
export const createRating = async (req, res) => {
  const { user_id, movie_id, rating, review } = req.body;
  try {
    // Check if the movie exists
    const [existingMovie] = await pool.query('SELECT * FROM movies WHERE id = ?', [movie_id]);
    if (existingMovie.length === 0) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Check if the user exists
    const [existingUser] = await pool.query('SELECT * FROM users WHERE id = ?', [user_id]);
    if (existingUser.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const query = 'INSERT INTO ratings (user_id, movie_id, rating, review) VALUES (?, ?, ?, ?)';
    const values = [user_id, movie_id, rating, review];
    await pool.query(query, values);
    res.status(201).json({ message: 'Rating added successfully' });
  } catch (error) {
    console.error("Error adding rating:", error);
    res.status(500).json({ message: 'Failed to add rating. Please try again later.' });
  }
};

// Function to get all ratings for a movie
export const getRatingsForMovie = async (req, res) => {
  const { movieId } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM ratings WHERE movie_id = ?', [movieId]);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching ratings for movie:", error);
    res.status(500).json({ message: 'Failed to fetch ratings for movie.' });
  }
};

// Function to delete a rating by ID
export const deleteRating = async (req, res) => {
  const { id } = req.params;
  try {
    const [existingRating] = await pool.query('SELECT * FROM ratings WHERE id = ?', [id]);
    if (existingRating.length === 0) {
      return res.status(404).json({ message: 'Rating not found' });
    }
    await pool.query('DELETE FROM ratings WHERE id = ?', [id]);
    res.status(200).json({ message: 'Rating deleted successfully' });
  } catch (error) {
    console.error("Error deleting rating:", error);
    res.status(500).json({ message: 'Failed to delete rating.' });
  }
};
