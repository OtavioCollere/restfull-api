import { ICreateUser } from "../models/ICreateUser";
import { IUser } from "../models/IUser";

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | undefined>;
  create({ name, email, password }: ICreateUser): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
}
