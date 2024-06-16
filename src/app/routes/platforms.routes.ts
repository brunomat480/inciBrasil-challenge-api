import { Router } from 'express';
import listPlatforms from '../modules/platforms/useCases/listPlatforms';
import addPlataform from '../modules/platforms/useCases/addPlataform';

const platformsRouter = Router();

platformsRouter.get('/users/:user_id/platforms', listPlatforms)
platformsRouter.post('/users/:user_id/platforms', addPlataform)

export { platformsRouter }
