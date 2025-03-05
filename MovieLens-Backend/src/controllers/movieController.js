import { pool } from "../config/db.js";

// Function to get all movies
export const getAllMovies = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM movies');
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ message: 'Failed to fetch movies.' });
  }
};

// Function to get a movie by ID
export const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM movies WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    res.status(500).json({ message: 'Failed to fetch movie by ID.' });
  }
};

// Function to create a new movie
export const createMovie = async (req, res) => {
  const { title, genre, release_year, description } = req.body;
  try {
    const query = 'INSERT INTO movies (title, genre, release_year, description) VALUES (?, ?, ?, ?)';
    const values = [title, genre, release_year, description];
    await pool.query(query, values);
    res.status(201).json({ message: 'Movie created successfully' });
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).json({ message: 'Movie creation failed. Please try again later.' });
  }
};

// Function to delete a movie by ID
export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const [existingMovie] = await pool.query('SELECT * FROM movies WHERE id = ?', [id]);
    if (existingMovie.length === 0) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    await pool.query('DELETE FROM movies WHERE id = ?', [id]);
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ message: 'Movie deletion failed. Please try again later.' });
  }
};

// Function to filter movies by genre, release_year, or title
export const filterMovies = async (req, res) => {
  const { genre, release_year, title } = req.query;
  try {
    let query = 'SELECT * FROM movies WHERE 1=1';
    const values = [];

    if (genre) {
      query += ' AND genre = ?';
      values.push(genre);
    }

    if (release_year) {
      query += ' AND release_year = ?';
      values.push(release_year);
    }

    if (title) {
      query += ' AND title LIKE ?';
      values.push(`%${title}%`);
    }

    const [rows] = await pool.query(query, values);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error filtering movies:", error);
    res.status(500).json({ message: 'Failed to filter movies.' });
  }
};
