const { join } = require("path");
const { readFileSync } = require("fs");
const connection = require("../connection");

const Build = () => {
  const sql = readFileSync(join(__dirname, "database.sql")).toString();
  return connection.query(sql);
};

module.exports = Build;
