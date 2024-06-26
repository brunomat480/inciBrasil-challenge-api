import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../useCases/authenticateUser/AuthenticateUserUseCase";

class AuthenticateUserCotroller {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { password, identifier } = request.body;

    try {
      const token = await this.authenticateUserUseCase.execute({
        password,
        identifier,
      });

      return response.json(token);
    } catch (error) {

      return response.status(401).json({ message: "Não autorizado" });

    }
  }
}

export { AuthenticateUserCotroller };
