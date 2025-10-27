const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://todo_user:todo_pass@localhost:5432/todo_db';

const pool = new Pool({ connectionString });

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
