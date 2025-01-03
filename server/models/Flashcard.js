const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  frontText: { type: String, required: true },
  backText: { type: String, required: true },
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
