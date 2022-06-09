const express = require('express');
const postControllers = require('../controllers/postcontrollers')
const router = express.Router();

// GET && POST - /theme/
router("/", postControllers.getAllThemes)


module.exports = router;