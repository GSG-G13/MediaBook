const connection = require("../connection");

const getPostsQuery = () => {
  return connection.query("SELECT content, firstname, surname,image_url FROM posts left join users on users.id = posts.user_id;");
};

module.exports = getPostsQuery;
