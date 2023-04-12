const addLoginController = require("./middlewares/loginController");
const signupContoller = require("./middlewares/signupController");
const getPostsController = require("./middlewares/postsController");
const getusername = require("./middlewares/usernameController");

module.exports = { addLoginController, signupContoller, getPostsController , getusername};
