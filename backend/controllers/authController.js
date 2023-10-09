// authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/authConfig');

module.exports = {
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;

      const existentUser = await User.findOne({ email });

      if (!existentUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          name,
          email,
          password: hashedPassword,
        });

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(payload, secretKey, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
      } else {
        return res.status(400).json({
          message: 'Email already in use! Do you want to login instead?',
        });
      }
    } catch (error) {
      throw Error(`Error while registering a new user: ${error}`);
    }
  },

  // Add login and logout functions as needed
};
