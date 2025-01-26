const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb+srv://Akshara:123%40akshara@cluster0.fgcb3.mongodb.net/'; // Replace with your MongoDB URI

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mount the auth routes
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error('MongoDB connection error:', err));

require('dotenv').config();



