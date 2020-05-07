var express = require("express");
var router = express.Router();
var mainCtrl = require("../../controllers/index");

router.get("/", function (req, res) {
  res.render("index");
});
router.post("/signup", mainCtrl.signup); // Create a new user
router.post("/login", mainCtrl.login); //User login

module.exports = router;
