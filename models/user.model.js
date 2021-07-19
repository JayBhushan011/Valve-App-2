const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName : {type: String, required: true, minlength : 3},
  lName : {type: String, required: true},
  username: {type: String, required: true},
  emailID : {type: String, required: true},
  password: {type: String, required: true},
  pictureURL: {type: String}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;