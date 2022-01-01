import express, { Application } from 'express';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router();
router.get('/', async (request: express.Request, response: express.Response): Promise<void> => {
  response.send(`hello world ${JSON.stringify(request.headers)}`);
});

app.use('/', router);
app.listen(3000, () => {
  console.log('listening on port 3000');
});

export default app;
