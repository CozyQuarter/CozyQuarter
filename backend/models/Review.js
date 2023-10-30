const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buildingRating: { type: Number, min: 1, max: 5, required: true },
  roomRating: { type: Number, min: 1, max: 5, required: true },
  locationRating: { type: Number, min: 1, max: 5, required: true },
  cleanlinessRating: { type: Number, min: 1, max: 5, required: true },
  overallRating: { type: Number, min: 1, max: 5, required: true },
  reviewText: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
""