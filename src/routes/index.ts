/**
 * Explain about the API.
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import express, { Application } from 'express';
import { createConnection } from 'mysql';

const database = createConnection({
  host: `localhost`,
  port: 13306,
  user: `craftsman`,
  password: `password`,
  database: `scenario`,
});
database.connect();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router();
router.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
  res.json({
    description: 'Welcome Imaginary store Inventory API.',
    infomation: {
      title: 'Imaginary store Inventory API',
      version: '1.0',
    },
  });
});

router.get('/v1/stocks/:id', async (req: express.Request, res: express.Response): Promise<void> => {
  database.query(`SELECT * from stocks where stocks.id = ${req.params.id};`, function (err, rows) {
    if (rows.length < 0) {
      throw err;
    }
    res.json({ id: rows[0].id, name: rows[0].name });
  });
  database.end();
});

// TODO FIX
router.get('/v1/products/:id', async (req: express.Request, res: express.Response): Promise<void> => {
  const samples = [`orange`, `apple`];
  let result;
  if (Number.parseInt(req.params.id) > -1) {
    result = samples[Number.parseInt(req.params.id)];
    res.json(result);
  } else {
    result = `No Contents.`;
    res.json(result);
  }
});

export default router;
