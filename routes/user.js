const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req,res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const username = req.body.username;
  const emailID = req.body.emailID;
  const password = req.body.password;
  const pictureURL = req.body.pictureURL;
  
  const newUser = new User({
    fName,
    lName,
    username,
    emailID,
    password,
    pictureURL
  });

  newUser.save()
  .then(() => res.json("User added!"))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
