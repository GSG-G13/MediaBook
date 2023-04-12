const connection = require("../connection")

const getusernameQuery = (id) => {
    const sql = {
        text: 'select firstname, surname, id from users where id=$1',
        values:[id]
    }
    return connection.query(sql);
};

module.exports = getusernameQuery;
