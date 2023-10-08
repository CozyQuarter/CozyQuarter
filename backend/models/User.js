const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    reviews: [
      {
        dormId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dorm', required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        // Add other relevant fields for a review
      },
    ],

})

module.exports = mongoose.model('User', UserSchema)