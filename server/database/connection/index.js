const { Pool } = require("pg");
require("dotenv").config();

const { DB_URL } = process.env;

const option = {
  connectionString: DB_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
};

const connection = new Pool(option);
module.exports = connection;
