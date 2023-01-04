//require('./config/config');
//require models
//require('./models/db');

require('./config/config');
require('./models/db');

//require packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//require routing
const rtsIndex = require('./routes/index.router');

//call express
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));