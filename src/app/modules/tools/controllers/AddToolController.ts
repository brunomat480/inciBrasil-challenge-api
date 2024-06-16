import { Request, Response } from 'express'
import { AddToolUseCase } from '../useCases/addTool/AddToolUseCase'


class AddToolController {
  constructor(private addToolUseCase: AddToolUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params
    const { name, imageUrl, url } = request.body

    console.log({ userId })

    try {
      const platform = await this.addToolUseCase.execute(userId, { name, imageUrl, url })

      return response.json(platform)
    } catch (error) {
      console.log(error)

      return response.status(400).json({ message: 'Erro ao adicionar as ferramentas' })
    }
  }
}

export { AddToolController }
