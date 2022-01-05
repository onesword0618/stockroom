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

describe('GET /store the API.', () => {
  afterAll(async () => {
    kill(process.pid);
  });

  test('response : Inventory lists.', async () => {
    const response = await request.agent(app).get('/store');
    expect(JSON.stringify(response.body)).toEqual('[{"id":1,"product":"orange"},{"id":2,"product":"apple"}]');
  });
});

describe('GET /products/:id the API.', () => {
  afterAll(async () => {
    kill(process.pid);
  });

  test('response : Inventory Product id.', async () => {
    const response = await request.agent(app).get('/products/1');
    expect(JSON.stringify(response.body)).toEqual('"apple"');
  });

  test('response : mistake Inventory Product id.', async () => {
    const response = await request.agent(app).get('/products/-1');
    expect(JSON.stringify(response.body)).toEqual('"No Contents."');
  });
});
