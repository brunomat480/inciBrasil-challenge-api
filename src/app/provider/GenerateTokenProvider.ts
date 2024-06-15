import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "d64a9d7049d31f6d43e12fb73617070e", {
      subject: userId,
      expiresIn: "1d",
    });

    return token;
  }
}

export { GenerateTokenProvider };
