const connection = require("../connection");

const loginQuery = (email) => {
  const options = {
    text: `select * from users where email=$1`,
    values: [email],
  };

  return connection.query(options);
};

module.exports = loginQuery;
