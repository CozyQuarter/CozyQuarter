const mongoose = require('mongoose');

const dormSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true},
  folder: {type: String, required: true},
  year: {type: String, required: true},
  single_price: {type: int, required: true},
  double_price: {type: int, required: true},
  triple_price: {type: int, required: true},
  room_type: {type: String, required: true},
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const Dorm = mongoose.model('Dorm', dormSchema);

module.exports = Dorm;
