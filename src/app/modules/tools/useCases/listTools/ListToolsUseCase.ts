import { ToolDTO } from '../../@types/ToolDTO'
import { ToolRepository } from '../../repositories/ToolRepository'

class ListToolsUserCase {
  constructor(private toolRepository: ToolRepository) { }

  async execute(user_id: string): Promise<ToolDTO[]> {
    const platforms = this.toolRepository.findAll(user_id)

    return platforms
  }
}

export { ListToolsUserCase }