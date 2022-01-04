/**
 * Explain about the API.
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import express, { Application } from 'express';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router();
router.get('/', async (request: express.Request, response: express.Response): Promise<void> => {
  response.json({ message: 'Welcome Imaginary store Inventory API.' });
});

router.get('/store', async (request: express.Request, response: express.Response): Promise<void> => {
  response.json([
    { id: 1, product: 'orange' },
    { id: 2, product: 'apple' },
  ]);
});

// TODO FIX
router.get('/products/:id', async (request: express.Request, response: express.Response): Promise<void> => {
  const samples = [`orange`, `apple`];
  let result;
  if (Number.parseInt(request.params.id) > -1) {
    result = samples[Number.parseInt(request.params.id)];
    response.json(result);
  } else {
    result = `No Contents.`;
    response.json(result);
  }
});

export default router;
