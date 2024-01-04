import { Router } from 'express';

const mainRouter = Router();



mainRouter.post('/excel', (req, res) => {
  const data = req.body;


  console.log(data);
  res.json('Excel stuff here');

});

export default mainRouter;