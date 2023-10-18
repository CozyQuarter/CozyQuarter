const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  console.log('Route reached');
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
        profilePicture,
      });

      await user.save();

      console.log('New user created;', user);

      return res.json({
        success: true,
        displayName: `${user.firstName} ${user.lastName}`,
      });
    }

    return res.status(400).json({
      error: ('User already exists:', existentUser),
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
});

module.exports = router;
