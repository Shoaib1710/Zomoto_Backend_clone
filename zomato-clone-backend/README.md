# Zomato Clone Backend

Welcome to the backend of the Zomato clone application! This project is built using Node.js, Express, and MongoDB. Follow these simple steps to get started.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:
- Node.js
- MongoDB

## Setup

1. **Clone the repository**:
   Open your terminal and run the following command:
   ```sh
   git clone <repository-url>
   cd zomato-clone-backend
   ```

2. **Install dependencies**:
   Run this command to install all the necessary packages:
   ```sh
   npm install
   ```

3. **Create a `.env` file**:
   Create a file named `.env` in the root directory and add the following content:
   ```properties
   MONGO_URI=mongodb://localhost:27017/zomato-clone
   PORT=5000
   ```

## Running the Application

1. **Start the server**:
   Run this command to start the server:
   ```sh
   node app.js
   ```

2. **Verify the server is running**:
   You should see a message like this:
   ```
   Server running on port 5000
   ```

## Testing the Endpoints

You can use tools like Postman or cURL to test the API endpoints.

### GET /api/restaurants

This endpoint retrieves all restaurants.

**Request**:
```sh
curl -X GET http://localhost:5000/api/restaurants
```

**Expected Response** (initially an empty array):
```json
[]
```

### POST /api/restaurants

This endpoint creates a new restaurant. Send a JSON payload with the restaurant details.

**Request**:
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

**Expected Response**:
```json
{
  "_id": "some_generated_id",
  "name": "Restaurant Name",
  "address": "Restaurant Address",
  "cuisine": "Cuisine Type",
  "rating": 4,
  "__v": 0
}
```

### GET /api/restaurants (after adding a restaurant)

This endpoint retrieves all restaurants.

**Request**:
```sh
curl -X GET http://localhost:5000/api/restaurants
```

**Expected Response**:
```json
[
  {
    "_id": "some_generated_id",
    "name": "Restaurant Name",
    "address": "Restaurant Address",
    "cuisine": "Cuisine Type",
    "rating": 4,
    "__v": 0
  }
]
```

## Error Handling

If there are any errors, they will be logged to the console and a 500 status code will be returned with a message indicating a server error.

```json
{
  "errors": [
    {
      "msg": "Server Error"
    }
  ]
}
```

## Conclusion

By following these steps, you should be able to set up, run, and test the backend application for the Zomato clone. If you encounter any issues, please check the console for error messages and ensure that MongoDB is running.

## Developed by Mohammed Shoaib
