import { Router } from 'express';
import listTools from '../modules/tools/useCases/listTools';
import addTool from '../modules/tools/useCases/addTool';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const toolsRouter = Router();

toolsRouter.use(ensureAuthenticated)
toolsRouter.get('/users/:userId/tools', listTools)
toolsRouter.post('/users/:userId/tools', addTool)

export { toolsRouter }
