import { Request, Response } from 'express'
import { AddPlatformUseCase } from '../useCases/addPlataform/AddPlatformUseCase'

class AddPlatformController {
  constructor(private addPlataformUseCase: AddPlatformUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body
    const { name, imageUrl, url } = request.body

    try {
      const platform = await this.addPlataformUseCase.execute(user_id, { name, imageUrl, url })

      return response.json(platform)
    } catch (error) {
      console.log(error)

      return response.status(400).json({ message: 'Erro ao buscar as plataformas' })
    }
  }
}

export { AddPlatformController }
