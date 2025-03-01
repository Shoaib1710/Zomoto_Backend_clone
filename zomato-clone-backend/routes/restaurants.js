const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Route to get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Route to create a new restaurant with validation
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('cuisine', 'Cuisine is required').not().isEmpty(),
    check('rating', 'Rating must be a number between 1 and 5').isFloat({ min: 1, max: 5 }),
  ],
  restaurantController.createRestaurant
);

module.exports = router;