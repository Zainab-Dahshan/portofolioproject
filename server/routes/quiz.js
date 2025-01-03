const express = require('express');
const Quiz = require('../models/Quiz');
const router = express.Router();

// Create a new quiz
router.post('/', async (req, res) => {
  const newQuiz = new Quiz(req.body);
  await newQuiz.save();
  res.status(201).json(newQuiz);
});

// Fetch quizzes for a course
router.get('/:courseId', async (req, res) => {
  const quizzes = await Quiz.find({ course: req.params.courseId });
  res.json(quizzes);
});

module.exports = router;
