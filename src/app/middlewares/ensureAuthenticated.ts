import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { userRepository } from '../modules/accounts/repositories';


interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Token missing!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "d64a9d7049d31f6d43e12fb73617070e"
    ) as IPayload;


    const user = await userRepository.findById(user_id);
    if (!user) {
      return response.status(401).json({ message: "User not found!" });
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    return response.status(401).json({ message: "Invalid token!" });
  }
}
