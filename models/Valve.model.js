const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const valveSchema = new Schema(
  {
    // GeneralValve:[{
    //   type: Schema.Types.ObjectId, ref: 'GeneralValve'
    // }],
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
    PhotosURL: [
      {
        type: String,
      },
    ],
    UserID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },

    ValveSize: Number,
    TimeSinceLastMaintenance: Number,
    Leaking: Boolean,
    TypeOfLeak: String,
  },
  {
    timestamps: true,
  }
);

valveSchema.methods.getValveByUser = function (user) {
  return valveSchema.findAll({ User: user });
};

const Valve = mongoose.model("Valve", valveSchema);

module.exports = Valve;
