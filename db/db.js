const { Pool } = require('pg');

const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'your-database',
  password: 'your-password',
  port: 5432,  // default port for PostgreSQL
});

module.exports = pool;
