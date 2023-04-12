const connection = require("../connection");

const signupQuery = ({ firstname, surname, email, password, gender, date }) => {
  const options = {
    text: `insert into users (firstname, surname, email, passwords, birthday, gender) values ($1, $2, $3, $4, $6, $5) returning firstname, surname,email, passwords, birthday, gender`,
    values: [firstname, surname, email, password, gender, date],
  };
  return connection.query(options);
};

module.exports = signupQuery;
