const express = require("express");
const app = express();
const mongoose = require("mongoose");
const admin = require('./route/adminRoute');
const user = require('./route/userRoute');
const path = require('path');
const nocache = require("nocache");
const cors = require("cors");
const db = require('./config/dbConfig'); // Import the database configuration

require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Apply nocache middleware to prevent caching
app.use(nocache());

// Parse incoming request bodies in a middleware before your handlers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Set view engine and views directory
app.set("view engine", "ejs");
app.set('views', 'views');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for users and admins
app.use('/', user);
app.use('/', admin);

// Connect to the SQL database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
    
    // Start the server once the database is connected
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
