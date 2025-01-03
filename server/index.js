const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((error) => console.error('DB connection error:', error));

app.listen(process.env.PORT || 5000, () => console.log('Server running on port', process.env.PORT || 5000))i;

const courseRoutes = require('./routes/course');
app.use('/api/courses', courseRoutes);
