const addLoginController = require("./middlewares/loginController");
const signupContoller = require("./middlewares/signupController");
const getPostsController = require("./middlewares/postsController");
const getusername = require("./middlewares/usernameController");
const postPostsController = require("./middlewares/postPostsController");

module.exports = { addLoginController, signupContoller, getPostsController , getusername,postPostsController};
