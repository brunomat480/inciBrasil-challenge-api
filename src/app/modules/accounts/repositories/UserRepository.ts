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

  async findByEmailOrPhone(identifier: string): Promise<UserDTO | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phone: identifier }
        ]
      },
    });

    return user;
  }


  async create({ name, email, password, phone }: UserDTO): Promise<UserDTO> {
    const passwordHash = await hash(password, 8)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: passwordHash,
      },
    })

    return newUser
  }
}

export { UserRepository }
