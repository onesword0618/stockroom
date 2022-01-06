import express, { Application } from 'express';
import index from './routes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);
app.use('/v1/stocks/:id', index);
app.use('/v1/products/:id', index);
export default app;
