import { UserDTO } from '../../@types/UserDTO';
import { UserRepository } from '../../repositories/UserRepository';

class SingleUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(id: string): Promise<UserDTO> {
    const user = await this.userRepository.findById(id)

    return user
  }
}

export { SingleUserUseCase }