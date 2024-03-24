
# Orthoplex-Solutions

## Description

This project is a backend application built using Node.js, Express, and PostgreSQL. It serves as the backend for Orthoplex-Solutions. It provides CRUD operations for managing users with pagination and middleware for ensuring that users are logged in.

## Features

- CRUD operations for managing users
- Pagination for user data
- Middleware for user authentication

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm run dev
   ```
2. The server will start running at `http://localhost:8080` by default.

## Endpoints

- `POST /api/auth/signup`: Endpoint for user signup.
- `POST /api/auth/login`: Endpoint for user login.
- `GET /api/user/getAllUsers/:page/:limit`: Endpoint to retrieve the users.
- `GET /api/user/getUserById/:userId`: Endpoint to retrieve specific user with id.
- `PUT /api/user/updateUserDetails/:userId`: Endpoint to update an existing user.
- `DELETE /api/user/deleteUser/:userId`: Endpoint to delete a user.

## Middleware

- `authenticate`: Middleware to ensure that the user is logged in before accessing protected routes.

## Environment Variables

Before running the project, make sure to create a `.env` file at the root of the project directory and define the following environment variables:


- `PORT`: Port number for the server to listen on.
- `DB_HOST`: PostgreSQL database host.
- `DB_USER`: PostgreSQL database user.
- `DB_PASSWORD`: PostgreSQL database password.
- `DB_NAME`: PostgreSQL database name.

## Contributing

Feel free to contribute to this project by opening issues or pull requests.


---

