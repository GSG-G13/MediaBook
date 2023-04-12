const postPostsQuery = require("./queries/postPostsQuery")
const getPostsQuery = require("./queries/getPostsQuery");
const signupQuery = require("./queries/signupQuery");
const Build = require("./config/build");
const getusernameQuery = require("./queries/getusernameQuery");
const getUserPostsQuery = require("./queries/getuserPostQuery");

module.exports = { signupQuery, Build, getPostsQuery,getusernameQuery, postPostsQuery,getUserPostsQuery };
