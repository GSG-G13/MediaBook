const express = require("express");
const router = express.Router();
const { addLoginController, signupContoller } = require("../controllers");
const { clientError, serverError } = require("../controllers/errors/errors");
const homePage = require("../controllers/middlewares/homeController");
// const { path } = require("../app");

router.post("/login", addLoginController);
router.post("/signup", signupContoller);
// router.use((req, res) => {
//     res.send(path.)
// })
router.use(homePage)
router.use(clientError);
router.use(serverError);

module.exports = router;
