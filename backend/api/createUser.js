const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/createUser', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existentUser = await User.findOne({ email });

    if (!existentUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      return res.json({
        success: true,
        displayName: `${user.firstName} ${user.lastName}`,
      });
    }

    return res.status(400).json({
      error: 'Email already in use! Do you want to login instead?',
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
});

module.exports = router;
