const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  dormId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dorm', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  // Add other relevant fields for a review
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
