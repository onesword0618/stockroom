/**
 * Explain about the API.
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import express, { Application, Request, Response } from 'express';
import { createConnection, MysqlError } from 'mysql';

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
app.get('/', async (req: Request, res: Response): Promise<void> => {
  res.json({
    description: 'Welcome Imaginary store Inventory API.',
    infomation: {
      title: 'Imaginary store Inventory API',
      version: '1.0',
    },
  });
});

type Stock = {
  id: string;
  name: string;
  address: string;
};

router.get('/v1/stocks/:id', async (req: Request, res: Response): Promise<void> => {
  const stocks: Stock[] = [];
  database.query(`SELECT * from stocks where stocks.id = ${req.params.id};`, function (err: MysqlError, rows: Stock[]) {
    if (rows.length < 0) {
      res.statusCode = 404;
      res.statusMessage = `Not Found`;
      database.end();
    }

    rows.forEach((element) => {
      stocks.push(element);
    });
    res.json(stocks);
  });
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
