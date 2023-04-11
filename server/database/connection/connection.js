const { pool } = require('pg');
require('dotenv').config();

const { DB_URL } = process.env;

const option = {
    connectionString: DB_URL,
    ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new pool(option);
module.exports = connection;

