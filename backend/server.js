const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./routes');
const app = express();
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

app.listen(port, () => {
  console.log(`Listening on ${port}`)
  // Perform a database connection when server starts

});
// Middleware
// Every time we get a request, log the path and method
// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })

// // Routes
// app.use(express.static(path.join(__dirname, "..", "frontend", "build")))

// // ...
// // Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
// });


// // app.get('/', (req, res) => {
// //     res.json({mssg: "Welcome to CozyQuarter!"})
// // })

// // Listen for requests
// // The port is just a random number, we can change it
// // Also the message can be changed
// app.listen(process.env.PORT || 4000, () => {
//     console.log("Listening on port 4000")
// })