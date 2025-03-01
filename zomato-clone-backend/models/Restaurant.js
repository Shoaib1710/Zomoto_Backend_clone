const mongoose = require('mongoose');

// Define the Restaurant schema
const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  cuisine: {
    type: String,
    required: [true, 'Cuisine is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating must be at most 5'],
  },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
