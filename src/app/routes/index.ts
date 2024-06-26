import { Router } from 'express'
import { usersRouter } from './users.routes'
import { authenticateRouter } from './authenticate.routes'
import { platformsRouter } from './platforms.routes'
import { toolsRouter } from './tools.routes'

const router = Router();

router.use(authenticateRouter)
router.use(usersRouter)
router.use(platformsRouter)
router.use(toolsRouter)

export { router }