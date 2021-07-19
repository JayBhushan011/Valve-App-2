const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();



// Middleware 
app.use(cors());

app.use(express.json()); //recognize the incoming Request Object as a JSON Object
app.use(express.urlencoded({extended: false})); //express to recognize the incoming Request Object as strings or arrays
// ******** 


// Server Setup
const PORT = process.env.PORT || 5000

// ********


// DB Setup 
const uri = process.env.DB_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
// ********


// Router Settings 

const userRoute = require('./routes/user');
app.use('/login', userRoute);

// ******** 

app.get("/", function(request, response) {
  response.send("<h1>Hello World!</h1>")
})

app.listen(PORT, function() {
  console.log("Server is running on port " + PORT)
});

