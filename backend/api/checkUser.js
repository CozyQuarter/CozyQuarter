/**
 * User Check API
 * 
 * Handles POST requests at '/checkUser' to verify if a user exists using their email. 
 * Responds with the user's existence status and display name if found, or a non-existence status. 
 * In case of errors, it returns a 500 Internal Server Error.
 * 
 * Dependencies:
 * - express: For creating the router.
 * - User model: For querying user data from the database.
 * 
 * Exports:
 * - Express router configured for the '/checkUser' endpoint.
 */

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/checkUser', async (req, res) => {
    try {
        const { email } = req.body;
        const existentUser = await User.findOne({ email });

        // If a user is found, respond with their existence status and display name.
        if (existentUser) {
            return res.json({
                exists: true,
                displayName: `${existentUser.firstName} ${existentUser.lastName}`,
            });
        }

        // If no user is found, respond with a false existence status.
        return res.json({
            exists: false,
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});

module.exports = router;
