/**
 * Dorm Reviews API
 * 
 * This module provides an Express router for fetching reviews of a specific dormitory. 
 * It handles GET requests to '/:dorm_name', where 'dorm_name' is a dynamic parameter representing the dorm's name.
 * 
 * The router queries the Dorm model to find the specified dorm and populates it with associated reviews from the Review model.
 * If the dorm is found, it returns the reviews. If the dorm is not found, it returns a 404 error. 
 * Any server-side errors during the process result in a 500 Internal Server Error response.
 * 
 * Dependencies:
 * - Dorm model: For querying dormitory data from the database.
 * - Review model: For accessing review data associated with dormitories.
 * - express: For creating the router.
 * 
 * Exports:
 * - Express router configured for fetching reviews of a specific dormitory.
 */

const Dorm = require('../models/Dorm');
const Review = require('../models/Review');
const express = require('express');
const router = express.Router();


router.get('/:dorm_name', async (req, res) => {
    const { dorm_name } = req.params;
    try {
        // Find the dorm by dorm_id
        const dorm = await Dorm.findOne({ name: dorm_name }).populate('reviews');

        if (!dorm) {
            console.error('Dorm not found for dorm_id:', dorm_name); // Log the dorm not found
            return res.status(404).json({ error: 'Dorm not found' });
        }

        // Extract reviews associated with the dorm
        const reviews = dorm.reviews;

        console.log('Fetched reviews for dorm:', dorm_name); // Log that reviews were successfully fetched

        // console.log('Review Data:', reviews);

        res.json({ reviews });
    } catch (error) {
        console.error('Error fetching reviews:', error); // Log any errors that occur during the fetch
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;