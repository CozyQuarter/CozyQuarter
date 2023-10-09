const mongoose = require('mongoose');

const dormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  // Add other relevant fields for a dorm
});

const Dorm = mongoose.model('Dorm', dormSchema);

module.exports = Dorm;
