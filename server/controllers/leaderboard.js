const Score = require('../models/Score');

// @desc    Get global leaderboard
// @route   GET /api/v1/leaderboard
// @access  Public
exports.getLeaderboard = async (req, res, next) => {
  try {
    const leaderboard = await Score.find()
      .populate('user', 'name')
      .sort({ bestScore: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      data: leaderboard,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
