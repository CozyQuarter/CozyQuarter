// Import your Mongoose models
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

        console.log('Review Data:', reviews);


        res.json({ reviews });
    } catch (error) {
        console.error('Error fetching reviews:', error); // Log any errors that occur during the fetch
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;