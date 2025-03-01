# Zomato Clone Backend - GitHub Setup Guide

This guide will help you set up and run the Zomato clone backend from GitHub.

## Prerequisites

Make sure you have:
- Node.js
- MongoDB

## Setup

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   cd zomato-clone-backend
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Create a `.env` file**:
   ```properties
   MONGO_URI=mongodb://localhost:27017/zomato-clone
   PORT=5000
   ```

## Running the Application

1. **Start the server**:
   ```sh
   node app.js
   ```

2. **Verify the server is running**:
   ```
   Server running on port 5000
   ```

## Testing the Endpoints

Use Postman or cURL to test the API.

### GET /api/restaurants

Retrieve all restaurants:
```sh
curl -X GET http://localhost:5000/api/restaurants
```

### POST /api/restaurants

Create a new restaurant:
```sh
curl -X POST http://localhost:5000/api/restaurants \
-H "Content-Type: application/json" \
-d '{
  "name": "Restaurant Name",
  "address": "Restaurant Address",
  "cuisine": "Cuisine Type",
  "rating": 4
}'
```

### GET /api/restaurants (after adding a restaurant)

Retrieve all restaurants:
```sh
curl -X GET http://localhost:5000/api/restaurants
```

## Error Handling

Errors will be logged to the console and a 500 status code will be returned with a message indicating a server error.

## Troubleshooting

### Common Issues

1. **MongoDB connection error**:
   - Ensure MongoDB is running.
   - Verify the `MONGO_URI` in the `.env` file is correct.

2. **Port already in use**:
   - Change the `PORT` in the `.env` file to a different number.

3. **Missing dependencies**:
   - Run `npm install` to ensure all dependencies are installed.

4. **Invalid data**:
   - Ensure the data sent in the request body matches the expected format.

## Conclusion

By following these steps, you should be able to set up, run, and test the backend application for the Zomato clone. If you encounter any issues, please check the console for error messages and ensure that MongoDB is running.

## Developed by Mohammed Shoaib
