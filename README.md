# Node.js Person CRUD API

This is a Node.js API for managing persons with basic CRUD (Create, Read, Update, Delete) functionality. It allows you to easily create, retrieve, update, and delete person records in a MongoDB database.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-person-crud-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your MongoDB connection by creating a `.env` file in the root directory and adding your connection string:

   ```env
   PORT=4500
   connectDB=<your_mongodb_connection_string>
   ```

5. Start the server:

   ```bash
   npm start
   ```

The API will be accessible at `http://localhost:4500`.

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

## Usage

Describe how to use the API, provide code examples, and explain the expected behavior of each endpoint.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes, and test thoroughly.
4. Create a pull request to the `main` branch of the original repository.