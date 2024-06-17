import { Router } from 'express';
import listPlatforms from '../modules/platforms/useCases/listPlatforms';
import addPlataform from '../modules/platforms/useCases/addPlataform';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const platformsRouter = Router();

platformsRouter.post('/users/:userId/platforms', ensureAuthenticated, addPlataform)
// platformsRouter.use(ensureAuthenticated)
platformsRouter.get('/users/:userId/platforms', ensureAuthenticated, listPlatforms)

export { platformsRouter }
