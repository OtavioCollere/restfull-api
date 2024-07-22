import { inject, injectable } from "tsyringe";
import { ICreateUser } from "../domain/models/ICreateUser";
import User from "../infra/typeorm/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute({ name, email, password }: ICreateUser): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email already exists.");
    }

    const hashedPassword = await hash(password, 8);

    // Não está dando save pois a função CREATE no repositório customizado já faz o SAVE
    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
