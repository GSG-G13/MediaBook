const connection = require("../connection");
const postPostsQuery = ({content,image_url}, user_id )=>{
    const options = {
        text:`insert into posts (content , image_url, user_id) values ($1 , $2, $3) returning content , image_url`,
        values:[content,image_url, user_id]
    };
    return connection.query(options)
};
module.exports = postPostsQuery;