/**
 * User Management Controller
 * 
 * Manages user operations in the application, including user creation and retrieval by ID.
 * 
 * Functions:
 * - createUser: Registers new users, checks for email uniqueness, hashes passwords with bcrypt, and returns the created user or a duplication message.
 * - getUserById: Fetches a user by their ID and returns user data or a non-existence message.
 * 
 * Interacts with the User model for database operations and manages responses and errors.
 * 
 * Dependencies:
 * - User model: MongoDB model for user data handling.
 * - bcryptjs: Library for password hashing and security.
 * 
 * Exports:
 * - A controller object containing the 'createUser' and 'getUserById' functions for user management operations.
 */

const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async createUser(req, res){
        try{
            console.log(req.body)
            const {firstName, lastName, password, email} = req.body;

            const existentUser = await User.findOne({email});
           
            if (!existentUser){
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword
                    
            });

            return res.json(user)

        }
        return res.status(400).json({
            message: 'email already in use! do you want to login instead?'
        });

        } catch(error){
            throw Error(`Error while registering a new user : ${error}`)
        }
    },

    async getUserById(){
        const userId = req.params;
        try {
            const user = await User.findById(userId);
            return res.json(user)
        } catch (error) {
            return res.status(400).json({
                message:
                'User ID does not exist, do you want to login instead?',
            })
        }
    }
}