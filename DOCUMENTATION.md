# Node.js Person CRUD API

This Node.js application provides a basic CRUD (Create, Read, Update, Delete) API for managing persons. It uses Express.js for handling HTTP requests, Mongoose for connecting to a MongoDB database, and includes the following endpoints:

- **POST /api**: Create a new person.
- **DELETE /api/:id**: Delete a person by their ID.
- **PUT /api/:id**: Update a person's name by their ID.
- **GET /api/:id**: Get a person by their ID.

## Getting Started

Before running the application, make sure you have Node.js and MongoDB installed on your system.

1. Clone this repository:

   ```
   git clone <repository_url>
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content, replacing `<your_mongodb_connection_string>` with your MongoDB connection string:

   ```
   PORT=4500
   connectDB=<your_mongodb_connection_string>
   ```

4. Start the server:

   ```
   npm start
   ```

The server will start and listen on port 4500 (or the port specified in your `.env` file).

## API Endpoints

### Create a Person

- **Endpoint:** `POST /api`
- **Request Body:**
  ```json
  {
    "name": "John Doe"
  }
  ```
- **Response:**
  ```json
  {
    "id": "<person_id>",
    "name": "John Doe"
  }
  ```

### Delete a Person

- **Endpoint:** `DELETE /api/:id`
- **Response:**
  ```json
  {
    "message": "Person deleted"
  }
  ```

### Update a Person

- **Endpoint:** `PUT /api/:id`
- **Request Body:**
  ```json
  {
    "name": "Jane Smith"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "<person_id>",
    "name": "Jane Smith"
  }
  ```

### Get a Person

- **Endpoint:** `GET /api/:id`
- **Response:**
  ```json
  {
    "_id": "<person_id>",
    "name": "John Doe"
  }
  ```

## Additional Information

- The application uses Mongoose to interact with the MongoDB database.
- Cross-Origin Resource Sharing (CORS) is enabled to allow requests from different domains.
- Error handling is implemented for each API endpoint to provide meaningful error messages.

Feel free to use this CRUD API as a starting point for your Node.js projects involving MongoDB.

For more details, refer to the [official documentation](http://route/api/).

---

This documentation is generated based on the code provided as of the last update. If you make changes to the code or add new features, please update this documentation accordingly.