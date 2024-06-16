import { Request, Response } from "express";

import { toolRepository } from '../../repositories';
import { AddToolUseCase } from './AddToolUseCase';
import { AddToolController } from '../../controllers/AddToolController';


export default (request: Request, response: Response) => {
  const addToolUseCase = new AddToolUseCase(toolRepository);
  const addToolController = new AddToolController(addToolUseCase);

  return addToolController.handle(request, response);
}