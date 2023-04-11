const express = require("express");
const router = express.Router();
const { addLoginController, signupContoller } = require("../controllers");
const { clientError, serverError } = require("../controllers/errors/errors");

router.post("/login", addLoginController);
router.post("/signup", signupContoller);

router.use(clientError);
router.use(serverError);

module.exports = router;
