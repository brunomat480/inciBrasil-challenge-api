import { Request, Response } from "express";

import { CreateUserController } from '../../controllers/CreateUserController';
import { userRepository } from '../../repositories';
import { CreateUserUseCase } from './CreateUserUseCase';

export default (request: Request, response: Response) => {
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController.handle(request, response);
}