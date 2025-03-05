import { pool } from "../config/db.js";
import bcrypt from "bcryptjs";

// Define the salt rounds for bcrypt hashing
const saltRounds = 10;

// User table schema
const userTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    mobile VARCHAR(15),
    password VARCHAR(255) NOT NULL,
    userType ENUM('user','admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Movies table schema
const movieTableQuery = `
  CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_year INT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Ratings table schema
const ratingTableQuery = `
  CREATE TABLE IF NOT EXISTS ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5), 
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
  );
`;

// Insert Admin user query
const insertAdminQuery = `
  INSERT INTO users (name, email, password, userType) 
  VALUES (?, ?, ?, ?) 
  ON DUPLICATE KEY UPDATE email = email;
`;

// Insert initial user query
const insertUserQuery = `
  INSERT INTO users (name, email, password, userType) 
  VALUES (?, ?, ?, ?) 
  ON DUPLICATE KEY UPDATE email = email;
`;

// Insert movies query
const insertMovieQuery = `
  INSERT INTO movies (title, genre, release_year, description)
  VALUES (?, ?, ?, ?);
`;

// Insert ratings query
const insertRatingQuery = `
  INSERT INTO ratings (user_id, movie_id, rating, review)
  VALUES (?, ?, ?, ?);
`;

// Function to create a table
const createTable = async (tableName, query) => {
  try {
    await pool.query(query);
    console.log(`${tableName} table created or already exists`);
  } catch (error) {
    console.log(`Error creating ${tableName}:`, error);
  }
};

// Function to create all necessary tables
const createAllTable = async () => {
  try {
    // Create Users, Movies, and Ratings tables
    await createTable("Users", userTableQuery);
    await createTable("Movies", movieTableQuery);
    await createTable("Ratings", ratingTableQuery);
    console.log("All tables created successfully!!");

    // Hash the password 'admin123' for the admin user
    const hashedAdminPassword = await bcrypt.hash('admin123', saltRounds);

    // Insert initial admin user with the hashed password using parameterized query
    const adminValues = ['Admin', 'admin@gmail.com', hashedAdminPassword, 'admin'];
    await pool.query(insertAdminQuery, adminValues);

    // Hash the password 'user123' for the initial user
    const hashedUserPassword = await bcrypt.hash('user123', saltRounds);

    // Insert initial user with the hashed password using parameterized query
    const userValues = ['User', 'user@gmail.com', hashedUserPassword, 'user'];
    await pool.query(insertUserQuery, userValues);

    console.log("Initial admin user and user inserted successfully");

    // Insert initial 10 movies into the movies table
    const movies = [
      ['Inception', 'Sci-Fi', 2010, 'A mind-bending thriller about dreams within dreams.'],
      ['The Dark Knight', 'Action', 2008, 'Batman faces off against the Joker in Gotham City.'],
      ['Forrest Gump', 'Drama', 1994, 'The extraordinary life of a man with a kind heart.'],
      ['The Godfather', 'Crime', 1972, 'A powerful mafia family drama set in 1940s New York.'],
      ['The Shawshank Redemption', 'Drama', 1994, 'Two imprisoned men bond over a number of years.'],
      ['The Matrix', 'Sci-Fi', 1999, 'A hacker learns the truth about reality and the Matrix.'],
      ['Pulp Fiction', 'Crime', 1994, 'Non-linear storytelling of intertwined gangster tales.'],
      ['The Lion King', 'Animation', 1994, 'A young lion prince overcomes tragedy to claim his throne.'],
      ['Gladiator', 'Action', 2000, 'A betrayed general seeks revenge in ancient Rome.'],
      ['The Avengers', 'Action', 2012, 'A group of superheroes join forces to save the world.']
    ];

    for (const movie of movies) {
      await pool.query(insertMovieQuery, movie);
    }
    console.log("Movies inserted successfully");

    // Insert ratings for each movie
    const ratings = [
      [1, 1, 5, 'Amazing plot with mind-blowing visuals!'], // Admin rated Inception
      [2, 2, 4, 'A great action-packed movie with brilliant performances.'], // User rated The Dark Knight
      [2, 3, 5, 'One of the most touching and emotional movies ever.'], // User rated Forrest Gump
      [1, 4, 5, 'A true masterpiece in cinema history.'], // Admin rated The Godfather
      [2, 5, 4, 'A deeply moving and inspirational film.'], // User rated The Shawshank Redemption
      [1, 6, 4, 'Great action with deep philosophical concepts.'], // Admin rated The Matrix
      [2, 7, 5, 'One of the greatest films of all time with incredible dialogue.'], // User rated Pulp Fiction
      [2, 8, 5, 'A beautiful story about life, loss, and destiny.'], // User rated The Lion King
      [1, 9, 4, 'A gripping and visually stunning epic.'], // Admin rated Gladiator
      [2, 10, 5, 'Great superhero team-up with unforgettable action scenes!'] // User rated The Avengers
    ];

    for (const rating of ratings) {
      await pool.query(insertRatingQuery, rating);
    }

    console.log("Ratings inserted successfully");

  } catch (error) {
    console.log("Error creating tables or inserting admin/user:", error);
    throw error;
  }
};

export default createAllTable;
