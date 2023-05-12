// routes/auth.js
const express = require('express');
const { register } = require('../controllers/authController');
const router = express.Router();

// Register route
router.post('/register', register());

// Login route
router.post('/login', login());

module.exports = router;
