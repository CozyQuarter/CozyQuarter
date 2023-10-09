const express = require('express');
const router = express.Router();
const Dorm = require('../models/Dorm');

// Get all dormitories
router.get('/', async (req, res) => {
  try {
    const dorms = await Dorm.find();
    res.json(dorms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new dormitory
router.post('/', async (req, res) => {
  const { name, location } = req.body;

  try {
    const newDorm = new Dorm({ name, location });
    await newDorm.save();

    res.status(201).json(newDorm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a specific dormitory by ID
router.get('/:dormId', async (req, res) => {
  const dormId = req.params.dormId;

  try {
    const dorm = await Dorm.findById(dormId);

    if (!dorm) {
      return res.status(404).json({ message: 'Dormitory not found' });
    }

    res.json(dorm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a dormitory by ID
router.put('/:dormId', async (req, res) => {
  const dormId = req.params.dormId;
  const { name, location } = req.body;

  try {
    const dorm = await Dorm.findById(dormId);

    if (!dorm) {
      return res.status(404).json({ message: 'Dormitory not found' });
    }

    dorm.name = name;
    dorm.location = location;
    await dorm.save();

    res.json(dorm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a dormitory by ID
router.delete('/:dormId', async (req, res) => {
  const dormId = req.params.dormId;

  try {
    const dorm = await Dorm.findByIdAndDelete(dormId);

    if (!dorm) {
      return res.status(404).json({ message: 'Dormitory not found' });
    }

    res.json({ message: 'Dormitory deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
