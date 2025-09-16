const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

console.log('Starting server.js...');

// Load env vars
dotenv.config();
console.log('dotenv configured.');

// Connect to database
console.log('Connecting to database...');
connectDB();
console.log('connectDB called.');

const app = express();
console.log('Express app created.');

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/games', require('./routes/games'));
app.use('/api/v1/leaderboard', require('./routes/leaderboard'));

const PORT = process.env.PORT || 5000;

console.log(`Attempting to listen on port ${PORT}...`);
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection Error: ${err.message}`);
  server.close(() => process.exit(1));
});
