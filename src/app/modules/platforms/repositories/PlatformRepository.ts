import { Platform } from '@prisma/client'
import { prisma } from '../../../lib/prisma'
import { PlatformDTO } from '../@types/PlatformDTO'

class PlatformRepository {

  async findAll(user_id: string): Promise<Platform[]> {
    const all = await prisma.platform.findMany({
      where: {
        userId: user_id
      }
    })

    return all
  }

  // async findById(id: string): Promise<UserDTO> {
  //   const [user] = await prisma.user.findMany({
  //     where: {
  //       id,
  //     },
  //   });

  //   return user;
  // }

  // async findByEmail(email: string): Promise<UserDTO> {
  //   const [user] = await prisma.user.findMany({
  //     where: {
  //       email,
  //     },
  //   });

  //   return user;
  // }

  async create(user_id: string, { name, imageUrl, url }: PlatformDTO): Promise<PlatformDTO> {

    const newUser = await prisma.platform.create({
      data: {
        name,
        imageUrl,
        url,
        userId: user_id
      },
    })

    return newUser
  }
}

export { PlatformRepository }
