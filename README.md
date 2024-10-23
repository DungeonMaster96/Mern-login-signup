# MERN Login & Signup Authentication

This project demonstrates user signup, login, and authentication using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User registration with username and password
- User login with authentication
- Backend using Express.js and MongoDB
- Frontend using React.js
- API-based communication between frontend and backend

## Project Structure

```bash
MERN_PRO/
│
├── backend/             # Backend (Node.js + Express) API
│   ├── db/              # Database connection and user model
│   ├── .env             # Environment variables for MongoDB connection string
│   ├── server.js        # Express server setup and routes
│
├── frontend/            # Frontend (React.js)
│   ├── src/             # React components and routing
│   ├── public/          # Public assets
│   ├── package.json     # Frontend dependencies
│
└── README.md            # Project documentation
```
## Technologies Used

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js, MongoDB (with Mongoose)
- **Database**: MongoDB (Cloud or Local)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed
- MongoDB (either locally or MongoDB Atlas for cloud database)

## Getting Started

### Clone the repository


### Backend Setup

1. Navigate to the `backend` folder:

2. Install backend dependencies:

3. Create a `.env` file in the `backend` folder with your MongoDB connection string:

4. Start the backend server:

### Frontend Setup

1. Open a new terminal, navigate to the `frontend` folder:

2. Install frontend dependencies:

3. Start the frontend:

## Running the Project

- **Backend** will run on: `http://localhost:8000`
- **Frontend** will run on: `http://localhost:3000`

Make sure both servers are running simultaneously.

## API Endpoints

- **POST** `/register`: Registers a new user with username and password.
- **POST** `/login`: Authenticates a user with username and password.

## License

This project is licensed under the MIT License.

