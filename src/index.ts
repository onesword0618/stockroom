/**
 * Entry Point.
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import app from './app';

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => {
  console.log(`Stockroom's API Server : ${PORT}`);
});
