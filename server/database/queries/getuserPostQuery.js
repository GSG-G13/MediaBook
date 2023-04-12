const connection = require("../connection")

const getUserPostsQuery = (id) => {
    const sql = {
        text: 'select content, image_url, firstname, surname from posts left join users on users.id=posts.user_id where user_id=$1',
        values:[id]
    }
    return connection.query(sql);
};

module.exports = getUserPostsQuery;
