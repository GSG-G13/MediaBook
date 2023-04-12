const jwt = require("jsonwebtoken");
const { getusernameQuery } = require("../../database");
require('dotenv').config()

const getusername = (req, res) => {
    const {user_id} = jwt.verify(req.cookies.access_token, process.env.SECRET_KEY)
    getusernameQuery(user_id)
    .then(data => data.rows[0])
    .then(data => {
        res.status(200).json(data);
    }).catch(error => {
        console.log(error)
        res.status(500).json({
            error: true,
            message: error
        })
    })
}
module.exports = getusername ;
