const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./auth');

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Use authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
