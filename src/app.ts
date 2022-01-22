/**
 * Main Process.
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import StatusCodes from 'http-status-codes';

import rootRouter from './routes';
import stockRouter from './routes/stocks';

const app: Express = express();
const { BAD_REQUEST } = StatusCodes;

/**
 * express settings.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', rootRouter);
app.use('/v1/stocks/', stockRouter);
// app.use('/v1/products/:id', rootRouter);

app.use((err: Error, req: Request, res: Response) =>
  // TODO FIX Add Logger
  res.status(BAD_REQUEST).json({
    error: err.message,
  }),
);

export default app;
