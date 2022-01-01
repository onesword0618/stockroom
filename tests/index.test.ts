import kill from 'tree-kill';
import request from 'supertest';
import app from '../src/app';

describe('GET', () => {
  afterAll(async () => {
    kill(process.pid);
  });

  test('responds with ', async () => {
    const response = await request.agent(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
