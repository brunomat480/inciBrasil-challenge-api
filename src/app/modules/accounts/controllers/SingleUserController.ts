import { Request, Response } from "express";

import { SingleUserUseCase } from '../useCases/singleUser/SingleUserUseCase';

class SingleUserController {
  constructor(private singleUserUseCase: SingleUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.singleUserUseCase.execute(id);

      return response.json(user);
    } catch (error) {
      console.log(error)

      return response.status(404).json({ message: "Usuário não encontrado" });
    }
  }
}

export { SingleUserController }