const request = require('supertest');
const express = require('express');
const tasksRouter = require('../src/routes/tasks');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/tasks', tasksRouter);

describe('Tasks API', () => {
  let createdTaskId;

  test('POST /api/tasks creates a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'test task from jest', description: 'desc' })
      .expect(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('test task from jest');
    createdTaskId = res.body.id;
  });

  test('GET /api/tasks returns latest tasks', async () => {
    const res = await request(app).get('/api/tasks').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    const found = res.body.some(t => t.id === createdTaskId);
    expect(found).toBe(true);
  });

  test('PUT /api/tasks/:id/done marks completed', async () => {
    await request(app).put(`/api/tasks/${createdTaskId}/done`).expect(200);
    const res = await request(app).get('/api/tasks').expect(200);
    const stillThere = res.body.some(t => t.id === createdTaskId);
    expect(stillThere).toBe(false);
  });
});
