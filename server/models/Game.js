const mongoose = require('mongoose');

const RoundSchema = new mongoose.Schema({
  actualLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  guessLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  distance: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const GameSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  rounds: [RoundSchema],
  totalScore: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', GameSchema);
