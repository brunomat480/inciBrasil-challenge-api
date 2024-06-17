import { UserDTO } from '../../@types/UserDTO'
import { UserRepository } from '../../repositories/UserRepository'

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ name, email, phone, password }: UserDTO): Promise<UserDTO> {
    const user = this.userRepository.create({ name, email, phone, password })

    return user
  }
}

export { CreateUserUseCase }
