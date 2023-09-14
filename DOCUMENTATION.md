# Node.js Person CRUD API

This Node.js application provides a basic CRUD (Create, Read, Update, Delete) API for managing persons. It uses Express.js for handling HTTP requests, Mongoose for connecting to a MongoDB database, and includes the following endpoints:

- **POST /api**: Create a new person.
- **DELETE /api/:id**: Delete a person by their ID.
- **PUT /api/:id**: Update a person's name by their ID.
- **GET /api/:id**: Get a person by their ID.

## Known Limitations

- This API is intended for educational purposes and may not be suitable for production use without further enhancements.
- Security features like authentication and authorization are not implemented.
- Error handling is basic and may not cover all edge cases.
- The API assumes a single MongoDB database connection for simplicity.

## Getting Started

### Prerequisites

Before running the application, make sure you have Node.js and MongoDB installed on your system.

### Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content, replacing `<your_mongodb_connection_string>` with your MongoDB connection string:

   ```env
   PORT=4500
   connectDB=<your_mongodb_connection_string>
   ```

4. Start the server:

   ```bash
   npm start
   ```

The server will start and listen on port 4500 (or the port specified in your `.env` file).

## Local Development

For local development, you can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoints.

## Deployment

To deploy this API on a server, follow these general steps:

1. Set up a server with Node.js and MongoDB installed.
2. Clone the repository to the server.
3. Install the required dependencies using `npm install`.
4. Create a `.env` file on the server with the necessary configuration (e.g., `PORT` and `connectDB`).
5. Start the server using `npm start` or use a process manager like [PM2](https://pm2.keymetrics.io/) for better management.

Ensure that the server is properly secured, and consider using a reverse proxy like [Nginx](https://nginx.org/) or [Apache](https://httpd.apache.org/) for routing and SSL termination in a production environment.

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
