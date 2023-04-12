const { getPostsQuery } = require("../../database");

const getPostsController = (req, res, next) => {
  getPostsQuery()
    .then(({ rows }) => {
      res.json(rows);
    })
    .catch((error) => next(error));
};

module.exports = getPostsController;
