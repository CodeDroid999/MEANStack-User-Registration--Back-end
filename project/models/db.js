const mongoose = require('mongoose');   //request mongoose

mongoose.connect(process.env.MONGODB_URI, (err)=> { 
     if (!error){console.log("MongoDb connection successfull.")}
     else {console.log("MongoDb connection Error."+JSON.stringify(err, undefined, 2));} 
  
});   //connect mongoose