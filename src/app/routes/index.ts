import { Router } from 'express';
import { usersRouter } from './users.routes';
import { authenticateRouter } from './authenticate.routes';

const router = Router();

router.use(usersRouter)
router.use(authenticateRouter)


export { router }