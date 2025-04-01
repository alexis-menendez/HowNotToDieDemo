//file path: HowNotToDieDemo/how-not-to-die/server/src/routes/api/index.ts

import { Router } from 'express';
import userRouter from './user-routes.js';

const router = Router();

router.use('/users', userRouter);

export default router;
