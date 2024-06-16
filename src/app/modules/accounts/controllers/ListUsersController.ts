import { Request, Response } from "express";

import { ListUsersUserCase } from '../useCases/listUsers/ListUsersUserCase';

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUserCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const all = await this.listUsersUseCase.execute();

      return response.json(all);
    } catch (error) {
      console.log(error)
      return response.status(400).json({ message: 'Erro ao buscar usuários' });
    }

  }
}

export { ListUsersController }