const express = require('express');

const router = express.Router();

// importing routes method from controllers
const {home, register, login} = require('../controllers/userController.js');

// different endpoint with different routes
router.get('/',home);
router.post('/register',register);
router.post('/login',login);

module.exports = router;