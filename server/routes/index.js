const express = require("express");
const router = express.Router();
const { addLoginController, signupContoller } = require("../controllers");

router.post("/login", addLoginController);
router.post("/signup", signupContoller);

module.exports = router;
