/**
 * Entry Point.
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import app from './app';
// TODO Add Logger.

// Start the API Server.
const PORT = Number(process.env.PORT || 8000);
app.listen(PORT, (): void => {
  // TODO FIX change Logger.
  // eslint-disable-next-line no-console
  console.log(`[App]: Listining on port ${PORT}`);
});
