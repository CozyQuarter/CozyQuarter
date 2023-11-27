/**
 * Dorm Average Ratings API
 * 
 * Provides a GET route on '/:dorm_name' to fetch and calculate average ratings for a specified dorm. 
 * Retrieves dorm data and associated reviews from the database. If no dorm is found, returns a 404 error. 
 * In case of no reviews, returns zero ratings. Handles server-side errors with a 500 response.
 * 
 * Dependencies:
 * - Dorm model: Used to access and query dormitory data from the database.
 * - Review model: Utilized for retrieving and aggregating review data related to dormitories.
 * - express: Framework for creating and managing the router and handling HTTP requests and responses.
 * 
 * Exports:
 * - Express router: Configured to handle GET requests for dorm reviews and ratings, including data retrieval, aggregation, and error handling.
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
