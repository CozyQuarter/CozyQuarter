/**
 * Authentication Controller
 * 
 * Manages user authentication processes including registration, and can be extended for login and logout.
 * 
 * Functions:
 * - registerUser: Handles new user registration, checks for existing email, and returns a JWT token on success.
 * 
 * Dependencies:
 * - User model: MongoDB model for user data handling.
 * - bcryptjs: Library for password hashing.
 * - jsonwebtoken: Library for creating JWT tokens for user authentication.
 * - authConfig: Configuration module providing the secret key for token generation.
 * 
 * Exports:
 * - An object with 'registerUser', 'login', and 'logout' placeholders for user authentication operations.
 */

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/authConfig');

module.exports = {
    async registerUser(req, res) {
        try {
            const { name, email, password } = req.body;

            const existentUser = await User.findOne({ email });

            if (!existentUser) {
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await User.create({
                    name,
                    email,
                    password: hashedPassword,
                });

                const payload = {
                    user: {
                        id: user.id,
                    },
                };

                jwt.sign(payload, secretKey, { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                });
            } else {
                return res.status(400).json({
                    message: 'Email already in use! Do you want to login instead?',
                });
            }
        } catch (error) {
            throw Error(`Error while registering a new user: ${error}`);
        }
    },

    // Add login and logout functions as needed
};
