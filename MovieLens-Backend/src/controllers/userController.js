import { pool } from "../config/db.js";

// Function to get all users
export const getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
};

// Function to get a single user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: 'Failed to fetch user by ID.' });
  }
};

// Function to create a new user
export const createUser = async (req, res) => {
  const { name, email, mobile, password, userType = 'user' } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Name, email, and password are required' });
  }

  try {
    // Hash the password before saving to DB
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const query = 'INSERT INTO users (name, email, mobile, password, userType) VALUES (?, ?, ?, ?, ?)';
    const values = [name, email, mobile, hashedPassword, userType];
    await pool.query(query, values);
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: 'User registration failed. Please try again later.' });
  }
};

// Function to delete a user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    // Check if the user exists
    const [existingUser] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (existingUser.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: 'User deletion failed. Please try again later.' });
  }
};

// Function to filter users by query parameters (like name, userType, etc.)
export const filterUsers = async (req, res) => {
  const { name, email, userType } = req.query;
  try {
    let query = 'SELECT * FROM users WHERE 1=1';
    const values = [];

    if (name) {
      query += ' AND name LIKE ?';
      values.push(`%${name}%`);
    }

    if (email) {
      query += ' AND email LIKE ?';
      values.push(`%${email}%`);
    }

    if (userType) {
      query += ' AND userType = ?';
      values.push(userType);
    }

    const [rows] = await pool.query(query, values);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error filtering users:", error);
    res.status(500).json({ message: 'Failed to filter users.' });
  }
};
