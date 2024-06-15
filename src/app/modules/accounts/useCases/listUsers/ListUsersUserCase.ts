import { UserDTO } from '../../@types/UserDTO';
import { UserRepository } from '../../repositories/UserRepository';

class ListUsersUserCase {
  constructor(private userRepository: UserRepository) { }

  async execute(): Promise<UserDTO[]> {
    const users = this.userRepository.findAll()

    return users
  }
}

export { ListUsersUserCase }