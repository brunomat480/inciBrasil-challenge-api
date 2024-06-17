import { Router } from 'express';
import listTools from '../modules/tools/useCases/listTools';
import addTool from '../modules/tools/useCases/addTool';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const toolsRouter = Router();

toolsRouter.post('/users/:userId/tools', addTool)
// toolsRouter.use(ensureAuthenticated)
toolsRouter.get('/users/:userId/tools', ensureAuthenticated, listTools)

export { toolsRouter }
