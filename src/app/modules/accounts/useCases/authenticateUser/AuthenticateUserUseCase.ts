import { compare } from "bcrypt"

import { GenerateTokenProvider } from '../../../../provider/GenerateTokenProvider'
import { UserRepository } from '../../repositories/UserRepository'

interface IRequest {
  identifier: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
    phone: string
  };
  token: string;
}

class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ identifier, password }: IRequest): Promise<IResponse | boolean> {
    const user = await this.userRepository.findByEmailOrPhone(identifier);

    if (!user) {
      return false
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {

      return false
    }

    const generateToken = new GenerateTokenProvider();

    if (user.id) {
      console.log("aqui", user.id)
      const token = await generateToken.execute(user.id);

      const tokenReturn: IResponse = {
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone
        },
        token,
      };

      return tokenReturn;
    }

    return false
  }
}

export { AuthenticateUserUseCase };
