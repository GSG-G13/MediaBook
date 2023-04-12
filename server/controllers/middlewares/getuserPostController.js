const { getUserPostsQuery } = require("../../database");
const jwt = require("jsonwebtoken");

const getUserPostsController = (req, res) => {
    const {user_id} = jwt.verify(req.cookies.access_token, process.env.SECRET_KEY)
    getUserPostsQuery(user_id)
      .then(data => {
        res.status(200).json(data.rows);
      }).catch(error => {
        res.status(500).json({
            error: true,
            messag: error.messag
        })
      })
}

module.exports = getUserPostsController