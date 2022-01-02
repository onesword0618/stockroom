import kill from 'tree-kill';
import request from 'supertest';
import app from '../src/app';

describe('GET / Explain about the API.', () => {
  afterAll(async () => {
    kill(process.pid);
  });

  test('response message : Welcome Imaginary store Inventory API.', async () => {
    const response = await request.agent(app).get('/');
    expect(JSON.stringify(response.body.message)).toBe('"Welcome Imaginary store Inventory API."');
  });
});
