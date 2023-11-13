/**
 * Dorm Review API Router
 *
 * This script sets up an Express router to handle API requests for dorm reviews.
 * It includes an endpoint to fetch and calculate the average ratings of a specific dorm based on its name.
 * 
 * Features:
 * - Retrieves a dorm's details by its name from the Dorm model.
 * - Populates the dorm data with its associated reviews from the Review model.
 * - Calculates average ratings across various categories (overall, building, room, location, cleanliness).
 * - Returns calculated average ratings and the total number of reviews for the requested dorm.
 * 
 * Models:
 * - Uses 'Dorm' and 'Review' Mongoose models for data fetching and manipulation.
 *
 * Endpoint:
 * - GET '/:dorm_name': Fetches and calculates the average ratings for a dormitory identified by 'dorm_name'.
 */

const Dorm = require('../models/Dorm');
const Review = require('../models/Review');
const express = require('express');
const router = express.Router();

router.get('/:dorm_name', async (req, res) => {
    const { dorm_name } = req.params;
    try {
        // Find the dorm by name
        const dorm = await Dorm.findOne({ name: dorm_name }).populate('reviews');

        if (!dorm) {
            console.log(`Dorm not found for name: ${dorm_name}`);
            return res.status(404).json({ error: 'Dorm not found' });
        }

        // Extract reviews associated with the dorm
        const reviews = dorm.reviews;

        if (!reviews || reviews.length === 0) {
            return res.status(200).json({
                averageRatings: {
                    overallRating: 0,
                    buildingRating: 0,
                    roomRating: 0,
                    locationRating: 0,
                    cleanlinessRating: 0,
                },
            });
        }

        // Calculate average ratings
        const sumOverallRating = reviews.reduce((acc, review) => acc + review.overallRating, 0);
        const sumBuildingRating = reviews.reduce((acc, review) => acc + review.buildingRating, 0);
        const sumRoomRating = reviews.reduce((acc, review) => acc + review.roomRating, 0);
        const sumLocationRating = reviews.reduce((acc, review) => acc + review.locationRating, 0);
        const sumCleanlinessRating = reviews.reduce((acc, review) => acc + review.cleanlinessRating, 0);

        const averageRatings = {
            overallRating: sumOverallRating / reviews.length,
            buildingRating: sumBuildingRating / reviews.length,
            roomRating: sumRoomRating / reviews.length,
            locationRating: sumLocationRating / reviews.length,
            cleanlinessRating: sumCleanlinessRating / reviews.length,
            totalReviews: reviews.length,
        };

        console.log('Calculated average ratings for dorm:', dorm_name);
        console.log('Average Ratings:', averageRatings);

        res.json({ averageRatings });
    } catch (error) {
        console.error('Error fetching average ratings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
