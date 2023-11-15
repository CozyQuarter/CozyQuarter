/**
 * User Reviews Fetching API
 * 
 * This module provides an Express router for fetching reviews associated with a specific user, identified by their email. 
 * It handles GET requests on '/:userEmail', where 'userEmail' is a dynamic parameter.
 * 
 * The router queries the User model to find the user by email and populates the response with their reviews. 
 * It returns a 404 error if the user is not found, and a 500 error for server-side issues during the fetch process.
 * 
 * Dependencies:
 * - User model: MongoDB model used for querying user data and associated reviews from the database.
 * - express: Framework for creating the router, managing HTTP request-response cycles, and handling route parameters.
 * 
 * Exports:
 * - Express router: Configured to handle GET requests for fetching user-specific reviews, including user lookup, data retrieval, and error handling.
 */

const User = require("../models/User");
const express = require('express');
const router = express.Router();


// Define the route to fetch user reviews
router.get('/:userEmail', async (req, res) => {
    const { userEmail } = req.params;
  
    try {
      // Find the user by their email and populate their reviews
      const userReviews = await User.findOne({ email: userEmail }).populate('reviews');
      
      if (!userReviews) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(userReviews.reviews);
    } catch (error) {
      console.error('Error fetching user reviews:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;
  