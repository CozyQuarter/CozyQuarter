/**
 * User Registration API
 * 
 * Handles POST requests for user registration at the root ('/') endpoint. It checks if an email
 * already exists in the database and, if not, creates a new user with hashed password using bcryptjs.
 * Logs the process and errors, and returns appropriate responses for success or failure of user creation.
 * 
* Dependencies:
 * - express: Used to create the router instance and handle HTTP requests.
 * - User model: MongoDB model used for querying and interacting with the user data.
 * - bcryptjs: Provides password hashing functionality to securely store user passwords.
 * 
 * Exports:
 * - Express router configured for handling user registration, including routes and logic for user creation and error handling.
 */

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  console.log('Route reached');
  try {
      const { firstName, lastName, email, password } = req.body;
      const existentUser = await User.findOne({ email });

      if (existentUser) {
          User.delete
          console.error('This email is already in use:', error);
          return res.status(500).json({
              error: 'Internal Server Error',
          });
      }

      // Create the new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
      });
      console.log('New user created:', newUser);

      return res.json({
          success: true,
          displayName: `${newUser.firstName} ${newUser.lastName}`,
      });
  } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({
          error: 'Internal Server Error',
      });
  }
});

module.exports = router;
