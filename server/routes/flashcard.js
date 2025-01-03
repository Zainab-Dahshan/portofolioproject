const express = require('express');
const Flashcard = require('../models/Flashcard');
const router = express.Router();

// Fetch flashcards by course
router.get('/:courseId', async (req, res) => {
  const flashcards = await Flashcard.find({ courseId: req.params.courseId });
  res.json(flashcards);
});

module.exports = router;

