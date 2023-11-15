/**
 * Review Model
 * 
 * Defines the Mongoose model for storing reviews of buildings. 
 * It includes user references, ratings for different aspects of the building,
 * and an optional review text field.
 * 
 * Dependencies:
 * - mongoose: For MongoDB object modeling.
 * 
 * Exports:
 * - Mongoose model 'Review' based on the defined schema.
 */

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buildingRating: { type: Number, min: 0.0, max: 5, required: true },
  roomRating: { type: Number, min: 0.0, max: 5, required: true },
  locationRating: { type: Number, min: 0.0, max: 5, required: true },
  cleanlinessRating: { type: Number, min: 0.0, max: 5, required: true },
  overallRating: { type: Number, min: 0.0, max: 5, required: true },
  reviewText: { type: String },

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
""