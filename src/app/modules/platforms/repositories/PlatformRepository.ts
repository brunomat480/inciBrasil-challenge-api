import { Platform } from '@prisma/client'
import { prisma } from '../../../lib/prisma'
import { PlatformDTO } from '../@types/PlatformDTO'

class PlatformRepository {

  async findAll(userId: string): Promise<Platform[]> {
    const all = await prisma.platform.findMany({
      where: {
        userId
      }
    })

    return all
  }

  async create(userId: string, { name, imageUrl, url }: PlatformDTO): Promise<PlatformDTO> {

    const newUser = await prisma.platform.create({
      data: {
        name,
        imageUrl,
        url,
        userId
      },
    })

    return newUser
  }
}

export { PlatformRepository }
