import { Request, Response } from "express";
import { ListToolsUserCase } from '../useCases/listTools/ListToolsUseCase';

class ListToolsController {
  constructor(private listToolsUseCase: ListToolsUserCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params

    const all = await this.listToolsUseCase.execute(userId);

    return response.json(all);
  }
}

export { ListToolsController }