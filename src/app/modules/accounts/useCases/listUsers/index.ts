import { Request, Response } from "express";
import { userRepository } from '../../repositories';
import { ListUsersUserCase } from './ListUsersUserCase';
import { ListUsersController } from '../../controllers/ListUsersController';


export default (request: Request, response: Response) => {
  const listUsersUseCase = new ListUsersUserCase(userRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);

  return listUsersController.handle(request, response);
}