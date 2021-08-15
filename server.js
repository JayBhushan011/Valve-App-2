const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const errorHandler = require("./middleware/error")


// DB Setup 
const uri = process.env.DB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
// ********

// Middleware 
app.use(cors());

app.use(express.json()); //recognize the incoming Request Object as a JSON Object
app.use(express.urlencoded({extended: false})); //express to recognize the incoming Request Object as strings or arrays
// ******** 

// Router Settings 

app.use('/api/auth', require("./routes/auth"));
app.use('/api/private', require("./routes/private"));
app.use('/api/valvedata', require("./routes/valve"));

// const userRoute = require('./routes/auth');
// app.use('/login', userRoute);

// ******** 

// Error Handler (should be last piece of middleware)
app.use(errorHandler)
// *******


const PORT = process.env.PORT || 3001;


const server = app.listen(PORT, function() {
  console.log("Server is running on port " + PORT)
});

process.on("unhandledRejection", (err,promise) => {
  console.log(`Logged Error: ${err}`);
  server.close( () => process.exit(1) );
})

