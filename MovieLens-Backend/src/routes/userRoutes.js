import express from 'express';
import { 
    getAllUsers, 
    getUserById, 
    createUser, 
    deleteUser, 
    filterUsers 
} from '../controllers/userController.js';

const router = express.Router();

// Get all users
router.get('/get-users', getAllUsers);

// Get a single user by ID
router.get('/get-user/:id', getUserById);

// Create a new user
router.post('/create-user', createUser);

// Delete a user by ID
router.delete('/delete-user/:id', deleteUser);

// Filter users based on query parameters (e.g., name, email, userType)
router.get('/filter-users', filterUsers);

export default router;
