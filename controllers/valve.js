let Valve = require('../models/Valve.model');

const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const ErrorResponse = require("../utils/errorResponse");

exports.editValve = async( req,res,next) => {
    let user;

    user = req.user._id;

    const {ValveType, Make, Series, Manual, PhotosURL, ValveSize, TimeSinceLastMaintenance,
        Leaking, TypeOfLeak
        } = req.body;
    
    
    
    

}
exports.newValve = async (req,res,next) => {

    
    const {ValveType, Make, Series, Manual, PhotosURL, ValveSize, TimeSinceLastMaintenance,
        Leaking, TypeOfLeak
        } = req.body;

    user = req.user._id;
    
    
    const UserID = user;
    

    try {
        const valve = await Valve.create({
            ValveType, 
            Make, 
            Series,
            Manual, 
            PhotosURL, 
            UserID, 
            ValveSize, 
            TimeSinceLastMaintenance,
            Leaking, 
            TypeOfLeak
        })
    
        res.status(201).json({
            success: true,
            valve
        });

    } catch(error) {
        next(error);
    }
};

exports.allValves = async (req,res,next) => {
    
    sendValves(req.user,res, next);
}

const sendValves =  async (userID,res, next) => {
    try{
        const UserID = userID;
        const valves = await Valve.find({UserID:UserID}).lean().exec()

        if (!valves){
            return ("No vales with this user")
        }
        res.status(201).json({
            success: true,
            data: {
                arr: valves
            }
        });

    } catch (error) {
        return next(new ErrorResponse(`Unable to get valves` + error , 404));
    }
};

exports.newEnum = async (req,res,next) => {
    
}
