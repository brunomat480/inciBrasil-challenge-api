import { Router } from 'express';
import listPlatforms from '../modules/platforms/useCases/listPlatforms';
import addPlataform from '../modules/platforms/useCases/addPlataform';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const platformsRouter = Router();

platformsRouter.use(ensureAuthenticated)
platformsRouter.get('/users/:userId/platforms', listPlatforms)
platformsRouter.post('/users/:userId/platforms', addPlataform)

export { platformsRouter }
