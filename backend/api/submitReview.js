/**
 * Review Submission API
 * 
 * This module provides an Express router for submitting reviews. It handles POST requests on the root ('/') endpoint.
 * The process involves receiving review data, checking for the existence of the user and dorm, and creating a new review.
 * 
 * The router retrieves the user by email and the dorm by its ID. If the dorm doesn't exist, it creates a new one. 
 * After creating the review, it updates the corresponding Dorm and User documents with the review reference.
 * 
 * If the user is not found, it returns a 404 error. For any server-side issues during submission, it responds with a 500 error.
 * 
 * Dependencies:
 * - express: Framework for creating the router and handling HTTP requests.
 * - mongoose: For database interactions and object modeling.
 * - Review, Dorm, User models: MongoDB models used for handling review, dorm, and user data in the database.
 * 
 * Exports:
 * - Express router: Configured for handling review submissions, including data validation, database operations, and error management.
 */

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Review = require('../models/Review');
const Dorm = require('../models/Dorm');
const User = require('../models/User');

// POST endpoint to submit a review
router.post('/', async (req, res) => {
    console.log("Review backend reached");
    try {
        // Get data from the request body
        const {
            buildingRating,
            roomRating,
            locationRating,
            cleanlinessRating,
            overallRating,
            reviewText,
            dorm_id,
            email,
        } = req.body;

        console.log("Received data:", {
            buildingRating,
            roomRating,
            locationRating,
            cleanlinessRating,
            overallRating,
            reviewText,
            dorm_id,
            email,
        });

        // Retrieve the user based on their email
        const user = await User.findOne({ email }); // Assuming email is unique

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if a Dorm with the given dorm_id exists
        let dorm = await Dorm.findOne({ name: dorm_id });
        // If the dorm doesn't exist, create it
        if (!dorm) {
            dorm = new Dorm({
                _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId
                name: dorm_id,
                reviews: [],
            });
            console.log("Created new dorm in DB. Dorm ID:", dorm._id);
            console.log(dorm.name);

        }

        // Create a new review
        const review = new Review({
            user: user._id, // Use the retrieved user's ID
            buildingRating,
            roomRating,
            locationRating,
            cleanlinessRating,
            overallRating,
            reviewText,
        });

        // Save the review to the database
        await review.save();

        // Associate the review with the dorm
        dorm.reviews.push(review);
        await dorm.save();

        // Update the user's reviews array
        user.reviews.push(review._id);
        await user.save();

        res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
        console.error("Error in submitting review:", error);
        res.status(500).json({ error: 'Review submission failed' });
    }
});

module.exports = router;
