const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./routes');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Review = require('./models/Review');
const checkUser = require('./api/checkUser');
const createUser = require('./api/createUser');
const app = express();
const path = require("path");




const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  db.once('open', () => {
    console.log('Connected to MongoDB:', db.name);
    console.log('Connection details:', db.client.s.url);
  });
} catch (error) {
  console.log(error);
}

app.use('/api/checkUser', checkUser);
app.use('/api/createUser', createUser);

// Every time we get a request, log the path and method
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use(express.static(path.join(__dirname, "..", "frontend", "build")))

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
  // Perform a database connection when server starts

});

// Create a new review
app.post('/api/createReview', async (req, res) => {
  const { dormId, userId, rating, comment } = req.body;

  try {
    const newReview = new Review({
      dormId,
      userId,
      rating,
      comment
    });

    await newReview.save();
    console.log('New review saved:', newReview);

    return res.json({ success: true, message: 'Review created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getReviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});