import { prisma } from '../../../lib/prisma'
import { ToolDTO } from '../@types/ToolDTO'

class ToolRepository {

  async findAll(userId: string): Promise<ToolDTO[]> {
    const all = await prisma.tool.findMany({
      where: {
        userId
      }
    })

    return all
  }

  async create(userId: string, { name, imageUrl, url }: ToolDTO): Promise<ToolDTO> {

    const addTool = await prisma.tool.create({
      data: {
        name,
        imageUrl,
        url,
        userId
      },
    })

    console.log(addTool)

    return addTool
  }
}

export { ToolRepository }
