//require('./config/config');
//require models
//require('./models/db');

require('./config/config');
require('./models/db');

//require packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//call express
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());