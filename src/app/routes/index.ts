import { Router } from 'express';
import { usersRouter } from './users.routes';
import { authenticateRouter } from './authenticate.routes';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { platformsRouter } from './platforms.routes';

const router = Router();

router.use(authenticateRouter)
router.use(ensureAuthenticated)
router.use(usersRouter)
router.use(platformsRouter)

export { router }