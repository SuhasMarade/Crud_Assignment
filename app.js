const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/db');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// initialize connection to database
connectToDb();

// Exporting user Routes from routes file
const userRoutes = require('./routes/userRoutes.js');

app.use('/',userRoutes);

module.exports = app;
