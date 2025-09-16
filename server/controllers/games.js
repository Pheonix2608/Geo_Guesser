const Game = require('../models/Game');
const Score = require('../models/Score');

// @desc    Get all games for a user
// @route   GET /api/v1/games
// @access  Private
exports.getGames = async (req, res, next) => {
  try {
    const games = await Game.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: games.length,
      data: games,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Add a game
// @route   POST /api/v1/games
// @access  Private
exports.addGame = async (req, res, next) => {
  try {
    req.body.user = req.user.id;

    const game = await Game.create(req.body);

    // Update user's best score
    const score = await Score.findOne({ user: req.user.id });
    if (score) {
        if (game.totalScore > score.bestScore) {
            score.bestScore = game.totalScore;
            await score.save();
        }
    } else {
        await Score.create({
            user: req.user.id,
            bestScore: game.totalScore
        });
    }

    res.status(201).json({
      success: true,
      data: game,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
