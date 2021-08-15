const router = require('express').Router();
const { protect } = require("../middleware/auth")
const { allValves, newValve, editValve } = require("../controllers/valve")

router.route("/").get(protect,allValves);
router.route("/newValve").post(protect,newValve);
router.route("/editValve").post(protect, editValve);

module.exports= router;