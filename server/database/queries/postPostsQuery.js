const connection = require("../connection");
const postPostsQuery = ({content,image_url,user_id : user_id} )=>{
    const options = {
        text:`insert into posts (content , image_url) values ($1 , $2) returning content , image_url`,
        values:[content,image_url]
    };
    return connection.query(options)
};
module.exports = postPostsQuery;