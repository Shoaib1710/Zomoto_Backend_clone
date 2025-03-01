import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch restaurants from the backend API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
