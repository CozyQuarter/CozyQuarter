const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./routes');
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV != 'production'){
  require('dotenv').config()
}

app.use(cors());
app.use(express.json());


try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION)
  console.log('MongoDB connected')
} catch(error){
  console.log(error)
}

app.use(routes);

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
