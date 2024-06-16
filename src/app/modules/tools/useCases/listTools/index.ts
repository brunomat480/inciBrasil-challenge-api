import { Request, Response } from "express";

import { toolRepository } from '../../repositories';
import { ListToolsUserCase } from './ListToolsUseCase';
import { ListToolsController } from '../../controllers/ListToolsController';

export default (request: Request, response: Response) => {
  const listToolsUserCase = new ListToolsUserCase(toolRepository);
  const listToolsController = new ListToolsController(listToolsUserCase);

  return listToolsController.handle(request, response);
}