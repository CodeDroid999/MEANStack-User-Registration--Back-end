//require mongoose
const mongoose = require('mongoose');

const User = mongoose.model('User');

//function to handle user requests
module.exports.register = (req, res, next) => {
    console.log("inside register fn. ");
}