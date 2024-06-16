import { PlatformDTO } from '../../@types/PlatformDTO'
import { PlatformRepository } from '../../repositories/PlatformRepository'


class ListPlatformsUserCase {
  constructor(private platformRepository: PlatformRepository) { }

  async execute(userId: string): Promise<PlatformDTO[]> {
    const platforms = this.platformRepository.findAll(userId)

    return platforms
  }
}

export { ListPlatformsUserCase }