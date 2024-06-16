import { prisma } from '../../../lib/prisma'
import { ToolDTO } from '../@types/ToolDTO'

class ToolRepository {

  async findAll(user_id: string): Promise<ToolDTO[]> {
    const all = await prisma.platform.findMany({
      where: {
        userId: user_id
      }
    })

    return all
  }

  async create(user_id: string, { name, imageUrl, url }: ToolDTO): Promise<ToolDTO> {

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

export { ToolRepository }
