import { PlatformDTO } from '../../@types/PlatformDTO'
import { PlatformRepository } from '../../repositories/PlatformRepository'

class AddPlatformUseCase {
  constructor(private platformRepository: PlatformRepository) { }

  async execute(user_id: string, { name, imageUrl, url }: PlatformDTO): Promise<PlatformDTO> {
    const platform = this.platformRepository.create(user_id, { name, imageUrl, url })

    return platform
  }
}

export { AddPlatformUseCase }
