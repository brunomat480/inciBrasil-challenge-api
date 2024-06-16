import { Router } from 'express';
import listPlatforms from '../modules/platforms/useCases/listPlatforms';

const platformsRouter = Router();

platformsRouter.get('/platforms', listPlatforms)
platformsRouter.get('/users/:user_id/plataforms', listPlatforms)

export { platformsRouter }
