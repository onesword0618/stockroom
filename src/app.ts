import express, { Application } from 'express';
import index from './routes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);
app.use('/store', index);
export default app;
