import { IUser } from "@modules/users/domain/models/IUser";
import { IUserRepository } from "@modules/users/domain/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";
import { ICreateUser } from "@modules/users/domain/models/ICreateUser";

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async create({ name, email, password }: ICreateUser): Promise<User> {
    const user = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;
