import { PlatformDTO } from '../../@types/PlatformDTO'
import { PlatformRepository } from '../../repositories/PlatformRepository'


class ListPlatformsUserCase {
  constructor(private platformRepository: PlatformRepository) { }

  async execute(): Promise<PlatformDTO[]> {
    const platforms = this.platformRepository.findAll()

    return platforms
  }
}

export { ListPlatformsUserCase }