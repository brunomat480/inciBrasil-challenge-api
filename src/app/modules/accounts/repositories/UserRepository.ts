import { hash } from 'bcrypt'
import { UserDTO } from '../@types/UserDTO'
import { prisma } from '../../../lib/prisma'

class UserRepository {

  async findAll(): Promise<UserDTO[]> {
    const all = await prisma.user.findMany()

    return all
  }

  async findById(id: string): Promise<UserDTO> {
    const [user] = await prisma.user.findMany({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<UserDTO> {
    const [user] = await prisma.user.findMany({
      where: {
        email,
      },
    });

    return user;
  }

  async create({ name, email, password }: UserDTO): Promise<UserDTO> {
    const passwordHash = await hash(password, 8)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    })

    return newUser
  }
}

export { UserRepository }
