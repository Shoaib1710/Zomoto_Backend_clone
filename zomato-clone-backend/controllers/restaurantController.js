const Restaurant = require('../models/Restaurant');
const { validationResult } = require('express-validator');

// Controller to get all restaurants
exports.getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
};

// Controller to create a new restaurant
exports.createRestaurant = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newRestaurant = new Restaurant(req.body);
    const restaurant = await newRestaurant.save();
    res.json(restaurant);
  } catch (err) {
    next(err);
  }
};
