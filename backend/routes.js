const express = require('express');
const multer = require('multer');
const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where you want to store the files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// POST route for uploading profile pictures
router.post('/uploadProfilePicture', upload.single('profilePicture'), (req, res) => {
  const userId = req.body.userId; // Assuming you send the userId along with the file

  // Update the user's profilePicture field in the database
  User.findByIdAndUpdate(userId, { profilePicture: req.file.path }, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ success: true });
  });
});

module.exports = router;
