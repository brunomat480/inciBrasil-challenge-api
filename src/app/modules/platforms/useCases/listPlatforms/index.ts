import { Request, Response } from "express";

import { platformRepository } from '../../repositories';
import { ListPlatformsUserCase } from './ListPlatformsUseCase';
import { ListPlatformsController } from '../../controllers/ListPlatformsController';

export default (request: Request, response: Response) => {
  const listPlatformsUserCase = new ListPlatformsUserCase(platformRepository);
  const listPlatformsController = new ListPlatformsController(listPlatformsUserCase);

  return listPlatformsController.handle(request, response);
}