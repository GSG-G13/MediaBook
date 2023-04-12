const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const {
  addLoginController,
  signupContoller,
  getPostsController,
  getusername,
  logoutController
} = require("../controllers");
const { clientError, serverError } = require("../controllers/errors/errors");
const homePage = require("../controllers/middlewares/homeController");



router.post("/login", addLoginController);
router.post("/signup", signupContoller);

router.post("/logout", logoutController);

router.get("/posts", getPostsController);
router.get('/username', getusername);


router.use(homePage);
router.use(clientError);
router.use(serverError);

module.exports = router;
