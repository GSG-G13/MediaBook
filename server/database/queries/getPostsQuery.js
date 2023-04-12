const connection = require("../connection");

const getPostsQuery = () => {
  return connection.query("SELECT content, user_id,image_url FROM posts;");
};

module.exports = getPostsQuery;
