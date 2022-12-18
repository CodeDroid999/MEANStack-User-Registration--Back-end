//request mongoose
const mongoose = require('mongoose');

//connect mongoose
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

//import  models
require('./user.model');