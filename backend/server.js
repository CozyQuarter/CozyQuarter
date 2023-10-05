require('dotenv').config({ path: './.env' })
const express = require('express')

// Express app
const app = express()

// Middleware
// Every time we get a request, log the path and method
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('../frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '../frontend/build/index.html'));
    });
}
// app.get('/', (req, res) => {
//     res.json({mssg: "Welcome to CozyQuarter!"})
// })

// Listen for requests
// The port is just a random number, we can change it
// Also the message can be changed
app.listen(process.env.PORT || 4000, () => {
    console.log("Listening on port 4000")
})