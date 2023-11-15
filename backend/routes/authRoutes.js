/**
 * Authentication Routes
 * 
 * Defines authentication-related routes for user registration, login, and logout.
 * These routes handle user authentication requests.
 * 
 * Dependencies:
 * - express: For creating and configuring routes.
 * - authMiddleware: Middleware for handling authentication-related tasks.
 * - authController: Controller functions for user authentication.
 * 
 * Route Definitions:
 * - POST '/register': Route for user registration.
 * - Add additional routes for login and logout as needed.
 * 
 * Exports:
 * - Express router containing authentication routes.
 */

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// Register user
router.post('/register', authController.registerUser);

// Add login and logout routes as needed

module.exports = router;
