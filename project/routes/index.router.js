//require express
const express = require('express');
//call router function from express
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

//configure routing for user registration
router.post('/register', ctrlUser.register);

//export routing
module.exports = router;