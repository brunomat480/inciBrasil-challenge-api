import { PlatformDTO } from '../../@types/PlatformDTO'
import { PlatformRepository } from '../../repositories/PlatformRepository'


class ListPlatformsUserCase {
  constructor(private platformRepository: PlatformRepository) { }

  async execute(user_id: string): Promise<PlatformDTO[]> {
    const platforms = this.platformRepository.findAll(user_id)

    return platforms
  }
}

export { ListPlatformsUserCase }