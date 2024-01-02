import { Router } from 'express'
import mainRouter from './main-router'

const router = Router();


router.use('/', mainRouter);


export default router;