const jwt = require("jsonwebtoken");
const {postPostsQuery} = require("../../database");

const postPostsController = (req ,res)=>{
    const {user_id} = jwt.verify(req.cookies.access_token, process.env.SECRET_KEY)
    const {content,image_url} = req.body
    postPostsQuery({content,image_url}, user_id)
    .then((data)=>{
        res.json(data.rows[0])
    })
    .catch((err) => res.status(500).send(err));
}


module.exports = postPostsController;