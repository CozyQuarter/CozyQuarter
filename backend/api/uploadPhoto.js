const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Dorm = require('../models/Dorm');
const User = require('../models/User');

router.post("/", async (req, res) => {
    console.log("in UploadPhoto api");
    const { base64, userEmail, dormName } = req.body;
    console.log(base64);
    console.log(userEmail);
    console.log(dormName);

    try {
        // Create a new image entry for Dorm and User models
        await User.updateOne({ email: userEmail }, { $push: { uploadedImages: base64 } });
        await Dorm.updateOne({ name: dormName }, { $push: { images: base64 } });

        res.send({ Status: "ok" });
    } catch (error) {
        res.status(500).json({ Status: "error", data: error });
    }
});


module.exports = router;
