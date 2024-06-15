import { Request, Response } from "express";

import { ListUsersUserCase } from '../useCases/listUsers/ListUsersUserCase';

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUserCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listUsersUseCase.execute();

    return response.json(all);
  }
}

export { ListUsersController }