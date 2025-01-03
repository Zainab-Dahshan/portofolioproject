const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  questions: [
    {
      question: String,
      options: [String],
      answer: String, // Correct answer
    },
  ],
});

module.exports = mongoose.model('Quiz', quizSchema);
