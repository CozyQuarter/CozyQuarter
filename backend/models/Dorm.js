/**
 * Dorm Model
 * 
 * This module defines the schema for the Dorm entity using Mongoose. It represents dormitories in the application's database.
 * 
 * Schema:
 * - name: String, required. The name of the dormitory.
 * - reviews: Array of ObjectIds, referencing the 'Review' model. These are the reviews associated with the dormitory.
 * 
 * The schema ensures that each dormitory has a name and can have multiple reviews associated with it. 
 * The reviews are stored as references to the Review model, allowing for efficient retrieval and management of related reviews.
 * 
 * Dependencies:
 * - mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
 * 
 * Exports:
 * - Dorm model, which is a Mongoose model derived from the dormSchema, allowing for CRUD operations on the 'dorms' collection in the database.
 */

const mongoose = require('mongoose');

const dormSchema = new mongoose.Schema({
  name: { type: String, required: true},
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  images: [{ type: String}], // References to images in GridFS

});

const Dorm = mongoose.model('Dorm', dormSchema);

module.exports = Dorm;
