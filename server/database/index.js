const postPostsQuery = require("./queries/postPostsQuery")
const getPostsQuery = require("./queries/getPostsQuery");
const signupQuery = require("./queries/signupQuery");
const Build = require("./config/build");

module.exports = { signupQuery, Build, getPostsQuery,postPostsQuery };
