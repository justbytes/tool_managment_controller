import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
  res.send('Excel stuff here');
});

export default mainRouter;