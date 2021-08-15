//General valve model -- need to use it

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const valveSchema = new Schema(
  {
    ValveType: {
      type: String,
      required: [true, "Please provide a valve type"],
    },

    Make: {
      type: String,
      required: [true, "Please provide a make"],
    },

    Series: {
      type: String,
    },

    Manual: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const GeneralValve = mongoose.model("Valve", valveSchema);

module.exports = GeneralValve;
