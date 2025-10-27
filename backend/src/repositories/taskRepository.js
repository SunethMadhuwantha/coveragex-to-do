const db = require('../db');

async function getLatestTasks(limit = 5) {
  const result = await db.query(
    `SELECT id, title, description, completed, created_at
     FROM "task"
     WHERE completed = false
     ORDER BY created_at DESC
     LIMIT $1`,
    [limit]
  );
  return result.rows;
}

async function createTask(title, description) {
  const result = await db.query(
    `INSERT INTO "task"(title, description) VALUES ($1, $2) RETURNING id, title, description, completed, created_at`,
    [title, description]
  );
  return result.rows[0];
}

async function markCompleted(id) {
  await db.query(
    `UPDATE "task" SET completed = true WHERE id = $1`,
    [id]
  );
}

module.exports = {
  getLatestTasks,
  createTask,
  markCompleted,
};
