const express = require('express');
const { getGames, addGame } = require('../controllers/games');
const { protect } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(protect, getGames)
  .post(protect, addGame);

module.exports = router;
