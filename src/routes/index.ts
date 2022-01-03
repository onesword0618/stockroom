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

export default router;
