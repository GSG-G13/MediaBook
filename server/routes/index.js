const express = require("express");
const router = express.Router();
const {
  addLoginController,
  signupContoller,
  getPostsController,
  getusername,
  postPostsController,
} = require("../controllers");
const { clientError, serverError } = require("../controllers/errors/errors");
const homePage = require("../controllers/middlewares/homeController");

router.post("/login", addLoginController);
router.post("/signup", signupContoller);
router.get("/posts", getPostsController);
router.get('/username', getusername)
router.post("/addPost",postPostsController)
router.use(homePage);
router.use(clientError);
router.use(serverError);

module.exports = router;
