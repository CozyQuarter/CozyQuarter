const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/checkUser', async (req, res) => {
  try {
    const { email } = req.body;

    const existentUser = await User.findOne({ email });

    if (existentUser) {
      return res.json({
        exists: true,
        displayName: `${existentUser.firstName} ${existentUser.lastName}`,
      });
    }

    return res.json({
      exists: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
});

module.exports = router;
