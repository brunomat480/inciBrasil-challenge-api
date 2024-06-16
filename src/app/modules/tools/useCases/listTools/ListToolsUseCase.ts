import { ToolDTO } from '../../@types/ToolDTO'
import { ToolRepository } from '../../repositories/ToolRepository'

class ListToolsUserCase {
  constructor(private toolRepository: ToolRepository) { }

  async execute(userId: string): Promise<ToolDTO[]> {
    const platforms = this.toolRepository.findAll(userId)

    return platforms
  }
}

export { ListToolsUserCase }