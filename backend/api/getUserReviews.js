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
  