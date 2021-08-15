const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String, 
    required: [true, "Please provide a username"]
  },

  email : {
    type: String, 
    required: [true, "Please provide an email"]
  },

  password: {
    type: String, 
    required: [true, "Please add a password"],
    minlength: 6,
    select: false
  },
  Valves: [{ type: Schema.Types.ObjectId, ref: 'Valve' }],

  resetPasswordToken: String,
  resetPasswordExpire: Date
  
}, {
  timestamps: true,
});

// Salt and Hash password
userSchema.pre("save", async function(next){
  if(!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next();

});

// Method for matching password
userSchema.methods.matchPasswords = async function(password){
  return await bcrypt.compare(password, this.password);
};

// Method for getting Tokens
userSchema.methods.getSignedToken = function() {
  return jwt.sign(
    {id: this._id}, 
    process.env.JWT_SECRET, 
    {expiresIn: process.env.JWT_EXPIRE}
    );
}

// Method for generating reset token
userSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)
  return resetToken;
}

const User = mongoose.model('User', userSchema);

module.exports = User;