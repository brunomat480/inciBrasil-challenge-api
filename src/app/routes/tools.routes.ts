import { Router } from 'express';
import listTools from '../modules/tools/useCases/listTools';
import addTool from '../modules/tools/useCases/addTool';

const toolsRouter = Router();

toolsRouter.get('/users/:user_id/tools', listTools)
toolsRouter.post('/users/:user_id/tools', addTool)

export { toolsRouter }
