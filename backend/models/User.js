const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String }, // This could be a URL to the profile picture
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;