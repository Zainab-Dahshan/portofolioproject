const express = require('express');
const auth = require('../middleware/auth');
const Course = require('../models/Course');
const router = express.Router();

// Create a new course (only teachers)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'teacher') return res.status(403).json({ message: 'Access denied' });
    const newCourse = new Course({ ...req.body, teacher: req.user.id });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
});

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;
