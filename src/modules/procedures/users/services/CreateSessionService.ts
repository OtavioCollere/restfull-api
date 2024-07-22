import { inject, injectable } from "tsyringe";
import User from "../infra/typeorm/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import AppError from "@shared/errors/AppError";
import { ICreateSession } from "../domain/models/ICreateSession";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute({
    email,
    password,
  }: ICreateSession): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Invalid email and password combination", 401);
    }

    const confirmedPassword = await hash(password, user.password);

    if (!confirmedPassword)
    {
      throw new AppError("Invalid email and password combination", 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn
    })

    return {
      user,
      token
    }

  }
}

export default CreateSessionService;
