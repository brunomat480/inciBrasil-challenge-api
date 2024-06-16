import { Request, Response } from "express";

import { platformRepository } from '../../repositories';
import { AddPlatformUseCase } from './AddPlatformUseCase';
import { AddPlatformController } from '../../controllers/AddPlatformController';

export default (request: Request, response: Response) => {
  const addPlatformUseCase = new AddPlatformUseCase(platformRepository);
  const addPlatformController = new AddPlatformController(addPlatformUseCase);

  return addPlatformController.handle(request, response);
}