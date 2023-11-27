const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Dorm = require('../models/Dorm'); // Assuming your Dorm model is defined in the specified path


// Endpoint to get photos for a specific dorm by its ID
router.get('/:dorm_id', async (req, res) => {
    const { dorm_id } = req.params;

    try {
        // Find the dorm by its ID and fetch its images
        const dorm = await Dorm.findOne({ name: dorm_id });

        if (!dorm) {
            return res.status(404).json({ status: 'error', message: 'Dorm not found' });
        }

        const { images } = dorm; // Assuming images is the array field in your Dorm schema

        // Send the images array as a response
        res.status(200).json({ status: 'ok', data: images });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

module.exports = router;