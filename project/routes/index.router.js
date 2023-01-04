//require express server
const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

//configure routing for user registration
router.post('/register', ctrlUser.register);

//export routing for user registration
module.exports = router;
