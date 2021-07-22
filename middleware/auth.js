// this is going to check for jwt in the headers 
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const ErrorResponse = require("../utils/errorResponse");

// Can add this middleware to protected routes and it will check for the token 
exports.protect = async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        // Bearer 42dcscj34gfu3f4buf3 
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token) {
        return next(new ErrorResponse("Not authorized to access this route", 401));
    };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const user = await User.findById(decoded.id);

        if (!user){
            return next(new ErrorResponse("No user found with this id", 404));
        }

        req.user = user;

        next();

    } catch(error) {
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }
}