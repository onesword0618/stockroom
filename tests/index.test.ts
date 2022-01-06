import kill from 'tree-kill';
import request from 'supertest';
import app from '../src/app';

describe('GET / Explain about the API.', () => {
  afterAll(async () => {
    kill(process.pid);
  });

  test('response description : Welcome Imaginary store Inventory API.', async () => {
    const response = await request.agent(app).get('/');
    expect(JSON.stringify(response.body.description)).toBe('"Welcome Imaginary store Inventory API."');
  });

  test('response title : Imaginary store Inventory API', async () => {
    const response = await request.agent(app).get('/');
    expect(JSON.stringify(response.body.infomation.title)).toBe('"Imaginary store Inventory API"');
  });

  test('response version : Imaginary store Inventory API', async () => {
    const response = await request.agent(app).get('/');
    expect(JSON.stringify(response.body.infomation.version)).toBe('"1.0"');
  });
});

describe('GET /v1/stocks/:id : Derivation stock Information.', () => {
  afterAll(async () => {
    kill(process.pid);
  });

  test('response : stock id.', async () => {
    const response = await request.agent(app).get('/v1/stocks/1');
    expect(JSON.stringify(response.body.id)).toEqual('1');
  });

  test('response : stock type.', async () => {
    const response = await request.agent(app).get('/v1/stocks/1');
    expect(JSON.stringify(response.body.type)).toEqual('"supermarket"');
  });
});

describe('GET /v1/products/:id the API.', () => {
  afterAll(async () => {
    kill(process.pid);
  });

  test('response :  product id.', async () => {
    const response = await request.agent(app).get('/v1/products/1');
    expect(JSON.stringify(response.body)).toEqual('"apple"');
  });

  test('response : mistake Inventory Product id.', async () => {
    const response = await request.agent(app).get('/v1/products/-1');
    expect(JSON.stringify(response.body)).toEqual('"No Contents."');
  });
});
