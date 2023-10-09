// authRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// Register user
router.post('/register', authController.registerUser);

// Add login and logout routes as needed

module.exports = router;
