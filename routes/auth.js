// Import Express Router
const router = require('express').Router();

const { register, login, resetpassword } = require("../controllers/auth")


// Create Routes

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/resetpassword/:resetToken").put(resetpassword)

//Export Router
module.exports = router;
