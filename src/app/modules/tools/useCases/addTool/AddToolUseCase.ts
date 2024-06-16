import { ToolDTO } from '../../@types/ToolDTO'
import { ToolRepository } from '../../repositories/ToolRepository'


class AddToolUseCase {
  constructor(private toolRepository: ToolRepository) { }

  async execute(userId: string, { name, imageUrl, url }: ToolDTO): Promise<ToolDTO> {
    const platform = this.toolRepository.create(userId, { name, imageUrl, url })

    return platform
  }
}

export { AddToolUseCase }
