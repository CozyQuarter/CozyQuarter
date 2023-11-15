/**
 * Review Deletion API
 * 
 * This module provides an Express router for deleting a specific review by its ID. 
 * It handles DELETE requests to '/:reviewId', where 'reviewId' is a dynamic parameter representing the review's unique identifier.
 * 
 * The router first attempts to find and remove the specified review from the Review model. 
 * If the review is found and successfully deleted, it then removes references to this review from the corresponding User and Dorm documents.
 * If the review is not found, it returns a 404 error. Server-side errors during the process result in a 500 Internal Server Error response.
 * 
 * The process includes logging the state of reviews in Dorm documents before and after the deletion.
 * 
 * Dependencies:
 * - Review, Dorm, and User models: For accessing and updating review data in the database.
 * - express: For creating the router.
 * 
 * Exports:
 * - Express router configured for deleting reviews by ID.
 */

const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Dorm = require('../models/Dorm');
const User = require('../models/User');

// DELETE route to delete a review by ID
router.delete('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;

    try {
        // Find the review by ID and remove it
        const deletedReview = await Review.findByIdAndRemove(reviewId);

        // Log the reviewId before removal
        // console.log('User reviews before removal:', (await User.find()).map(user => user.reviews));
        console.log('Dorm reviews before removal:', (await Dorm.find()).map(dorm => dorm.reviews));


        if (!deletedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        // Remove the reference to the review from the corresponding User document
        await User.updateOne({ reviews: reviewId }, { $pull: { reviews: reviewId } });

        // Remove the reference to the review from the corresponding Dorm document
        await Dorm.updateOne({ reviews: reviewId }, { $pull: { reviews: reviewId } });

        // console.log('User reviews after removal:', (await User.find()).map(user => user.reviews));
        console.log('Dorm reviews after removal:', (await Dorm.find()).map(dorm => dorm.reviews));



        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
