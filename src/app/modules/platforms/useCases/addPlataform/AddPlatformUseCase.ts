import { PlatformDTO } from '../../@types/PlatformDTO'
import { PlatformRepository } from '../../repositories/PlatformRepository'

class AddPlatformUseCase {
  constructor(private platformRepository: PlatformRepository) { }

  async execute(userId: string, { name, imageUrl, url }: PlatformDTO): Promise<PlatformDTO> {
    const platform = this.platformRepository.create(userId, { name, imageUrl, url })

    return platform
  }
}

export { AddPlatformUseCase }
