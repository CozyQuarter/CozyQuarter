const mongoose = require('mongoose');

const dormSchema = new mongoose.Schema({
  name: { type: String, required: true},
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const Dorm = mongoose.model('Dorm', dormSchema);

module.exports = Dorm;
