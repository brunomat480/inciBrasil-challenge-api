import { Request, Response } from "express";
import { userRepository } from '../../repositories';
import { SingleUserUseCase } from './SingleUserUseCase';
import { SingleUserController } from '../../controllers/SingleUserController';



export default (request: Request, response: Response) => {
  const singleUserUseCase = new SingleUserUseCase(userRepository);
  const singleUserController = new SingleUserController(singleUserUseCase);

  return singleUserController.handle(request, response);
}