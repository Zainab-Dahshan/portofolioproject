// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/user'); // User routes for signup/login
const courseRoutes = require('./routes/course'); // Course routes
const quizRoutes = require('./routes/quiz'); // Quiz routes
const flashcardRoutes = require('./routes/flashcard'); // Flashcard routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define API routes
app.use('/api/users', userRoutes); // Authentication routes
app.use('/api/courses', courseRoutes); // Course management
app.use('/api/quizzes', quizRoutes); // Quizzes
app.use('/api/flashcards', flashcardRoutes); // Flashcards

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Educhem HuB API');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
