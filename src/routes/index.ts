/**
 * Explain about the API.
 *
 * Copyright (c) 2022.
 * Kenichi Inoue.
 */
import { Request, Response, Router } from 'express';

const rootRouter: Router = Router();
rootRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  res.json({
    description: 'Welcome Imaginary store Inventory API.',
    infomation: {
      title: 'Imaginary store Inventory API',
      version: '1.0',
    },
  });
});

// TODO FIX
// router.get('/v1/products/:id', async (req: express.Request, res: express.Response): Promise<void> => {
//   const samples = [`orange`, `apple`];
//   let result;
//   if (Number.parseInt(req.params.id) > -1) {
//     result = samples[Number.parseInt(req.params.id)];
//     res.json(result);
//   } else {
//     result = `No Contents.`;
//     res.json(result);
//   }
// });

export default rootRouter;
