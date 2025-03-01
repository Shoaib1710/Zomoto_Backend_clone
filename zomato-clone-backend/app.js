const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurants');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/restaurants', restaurantRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ errors: [{ msg: 'Server Error' }] });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
