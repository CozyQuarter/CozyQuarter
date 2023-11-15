/**
 * User Model
 * 
 * Defines the Mongoose model for user documents. 
 * It includes fields for user information such as first name, last name, email, password, and profile picture.
 * Additionally, it maintains references to user reviews.
 * 
 * Dependencies:
 * - mongoose: For MongoDB object modeling.
 * 
 * Exports:
 * - Mongoose model 'User' based on the defined schema.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String }, // This could be a URL to the profile picture
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('User', userSchema);

