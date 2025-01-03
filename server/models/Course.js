const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }, // Store plain text, HTML, or Markdown
  quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Only teachers can create
});

module.exports = mongoose.model('Course', courseSchema);

