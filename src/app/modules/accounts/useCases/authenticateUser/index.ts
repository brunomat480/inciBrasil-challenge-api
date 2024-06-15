import { Request, Response } from "express";

import { userRepository } from '../../repositories';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { AuthenticateUserCotroller } from '../../controllers/AuthenticateUserController';

export default (request: Request, response: Response) => {
  const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
  const authenticateUserCotroller = new AuthenticateUserCotroller(authenticateUserUseCase);

  return authenticateUserCotroller.handle(request, response);
}