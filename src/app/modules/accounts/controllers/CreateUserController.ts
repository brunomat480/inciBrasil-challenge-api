import { Request, Response } from 'express'
import { CreateUserUseCase } from '../useCases/createUser/CreateUserUseCase'

class CreateUserController {
  constructor(private createUserCase: CreateUserUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, phone, password } = req.body

    try {
      const user = await this.createUserCase.execute({ name, email, phone, password })

      return res.json(user)
    } catch (error) {
      console.log(error)

      return res.status(400).json({ message: 'Erro ao registrar usuário' })
    }
  }
}

export { CreateUserController }
