const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const connection = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || 5432,
});

module.exports = connection;