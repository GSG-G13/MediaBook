const jwt = require("jsonwebtoken");
const {postPostsQuery} = require("../../database");

const postPostsController = (req ,res)=>{
    const {user_id} = jwt.verify(req.cookies.access_token, process.env.SECRET_KEY)
    // const {content,image_url,user_id : token} = req.body
//     postPostsQuery({content,image_url,user_id : user_id})
//     .then((date)=>{
//         res.send(data.rows.json())
//     })
//     .catch((err) => res.status(500).send(err));
// }
console.log(req.body);
}

module.exports = postPostsController;