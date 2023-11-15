/**
 * Database Index Model
 * 
 * Centralizes the management of Mongoose models and connections for the application. 
 * It configures Mongoose to use global.Promise and aggregates the User, Review, and Dorm models. 
 * Additionally, it defines common roles used in the application.
 * 
 * Dependencies:
 * - mongoose: For MongoDB object modeling.
 * - User, Review, Dorm models: Individual models for application entities.
 * 
 * Exports:
 * - 'db' object containing Mongoose, models (User, Review, Dorm), and predefined roles (user, admin, moderator).
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.User = require('./User');
db.Review = require('./Review');
db.Dorm = require('./Dorm');

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;