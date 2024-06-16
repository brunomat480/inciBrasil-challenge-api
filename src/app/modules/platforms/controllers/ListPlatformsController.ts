import { Request, Response } from "express";
import { ListPlatformsUserCase } from '../useCases/listPlatforms/ListPlatformsUseCase';

class ListPlatformsController {
  constructor(private listPlatformsUseCase: ListPlatformsUserCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params

    const all = await this.listPlatformsUseCase.execute(userId);

    return response.json(all);
  }
}

export { ListPlatformsController }