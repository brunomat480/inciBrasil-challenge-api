import { ToolDTO } from '../../@types/ToolDTO'
import { ToolRepository } from '../../repositories/ToolRepository'


class AddToolUseCase {
  constructor(private toolRepository: ToolRepository) { }

  async execute(user_id: string, { name, imageUrl, url }: ToolDTO): Promise<ToolDTO> {
    const platform = this.toolRepository.create(user_id, { name, imageUrl, url })

    return platform
  }
}

export { AddToolUseCase }
