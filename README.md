# GeoGuesser Clone

This is a full-stack GeoGuesser clone game built with the MERN stack (MongoDB, Express, React, Node.js). The application allows users to play a game where they are shown a random Google Street View image and have to guess the location on a world map.

## Features

### Frontend (Functional)
- **Core Game Loop**: Displays a random Google Street View, allows users to guess a location on a map, calculates the distance, and shows a score.
- **Interactive Map**: A clickable world map for placing guesses.
- **Scoring System**: A simple scoring system where the score is based on the distance from the actual location.
- **Responsive UI**: A clean, modern, and responsive user interface that works on different devices.
- **Routing**: A complete UI prototype with placeholder pages for Login, Registration, Leaderboard, and Profile, with navigation handled by `react-router-dom`.

### Backend (Scaffolded)
- **User Authentication**: Endpoints for user registration and login using JWT (JSON Web Tokens).
- **Game & Score Storage**: API endpoints to save game sessions and scores to the database.
- **Global Leaderboard**: An endpoint to retrieve the top players' scores.
- **Protected Routes**: Middleware to protect routes that require authentication.

## Project Structure

The project is divided into two main parts:

-   `client/`: The React frontend application, created with `create-react-app`.
-   `server/`: The Express.js backend API.

```
.
├── client/         # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── ...
└── server/         # Express Backend
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB (a running instance, either local or cloud-based)

### Installation
1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```
2.  **Install root dependencies** (if any):
    ```bash
    npm install
    ```
3.  **Install client dependencies**:
    ```bash
    npm install --prefix client
    ```
4.  **Install server dependencies**:
    ```bash
    npm install --prefix server
    ```
    *Note: The backend dependency installation may fail in some environments. See the "Known Issues" section.*

### Configuration
You need to create `.env` files for both the client and the server.

1.  **Client Configuration**:
    Create a file named `.env` in the `client` directory (`client/.env`).
    ```
    REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
    ```
    - `REACT_APP_GOOGLE_MAPS_API_KEY`: Your Google Maps API key with the "Maps JavaScript API" and "Street View Static API" enabled.

2.  **Server Configuration**:
    Create a file named `.env` in the `server` directory (`server/.env`).
    ```
    MONGO_URI=your_mongodb_connection_string_here
    JWT_SECRET=your_jwt_secret_here
    ```
    - `MONGO_URI`: Your MongoDB connection string (e.g., `mongodb://127.0.0.1:27017/GeoGuesser`).
    - `JWT_SECRET`: A secret string for signing JSON Web Tokens.

## Running the Application

1.  **Run the Frontend**:
    Navigate to the `client` directory and run:
    ```bash
    npm start
    ```
    This will start the React development server, usually on `http://localhost:3000`.

2.  **Run the Backend**:
    Navigate to the `server` directory and run:
    ```bash
    # For development with auto-reloading
    npm run dev

    # For production
    npm start
    ```
    This will start the Express server, usually on `http://localhost:5000`.

## How to Make Changes

### Frontend (`client/`)

-   **Adding a new page**:
    1.  Create a new component in `client/src/components/`.
    2.  Open `client/src/App.js` and add a new `<Route>` for your component.
    3.  Add a link to your new page in the `client/src/components/Header.js` component if needed.

-   **Modifying the game logic**:
    -   The main game state is managed in `client/src/components/Game.js`.
    -   The random location generation logic is in `client/src/components/StreetView.js`.
    -   The map interaction logic is in `client/src/components/Map.js`.
    -   The scoreboard UI is in `client/src/components/Scoreboard.js`.

-   **Changing styles**:
    -   Global styles can be found in `client/src/App.css`.
    -   Most components have their own dedicated CSS file (e.g., `Header.css`, `Form.css`) in the `client/src/components/` directory.

### Backend (`server/`)

-   **Adding a new API endpoint**:
    1.  **Model**: If you need a new data structure, create a new schema in the `server/models/` directory.
    2.  **Controller**: Create a new controller function in the `server/controllers/` directory to handle the logic for the new endpoint.
    3.  **Route**: Define a new route in the `server/routes/` directory and connect it to your controller function.
    4.  **Server**: Mount the new route in `server/server.js`.

-   **Modifying database schemas**:
    -   All Mongoose schemas are located in the `server/models/` directory. You can edit the files (e.g., `User.js`, `Game.js`) to add or remove fields.

-   **Changing authentication logic**:
    -   The JWT verification middleware is in `server/middleware/auth.js`.
    -   The registration and login logic is in `server/controllers/auth.js`.

## Known Issues

-   **Environment Instability**: During development, persistent environment issues were encountered that prevented the installation of backend `node_modules` and the execution of tests. `npm install` for the server might fail or appear to succeed without actually installing the dependencies.
-   **No Tests**: The test suite could not be run due to the environment issues mentioned above. The `App.test.js` file has been updated with a relevant test, but its execution could not be verified.
