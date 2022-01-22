/**
 * Stock resource controller
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import { Request, Response, Router } from 'express';
import { createConnection } from 'mysql2';
import StatusCodes from 'http-status-codes';
import { database } from '../../config/database';

const { NOT_FOUND } = StatusCodes;

type Stock = {
  id: string;
  name: string;
  address: string;
};

/**
 * Get stocks by ID.
 */
const stockRouter: Router = Router();
stockRouter.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const connection = createConnection(database);
  connection.connect();

  const stocks: Stock[] = [];
  connection.query(`SELECT * from stocks where stocks.id = ${req.params.id};`, (err, rows: Stock[]) => {
    if (rows.length < 0) {
      connection?.end();
      return res.status(NOT_FOUND).json({
        error: err?.message,
      });
    }

    rows.forEach((element) => {
      stocks.push(element);
    });
    return res.json(stocks);
  });
});

export default stockRouter;
