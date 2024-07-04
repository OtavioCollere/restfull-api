import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repositories/UserRepository";
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import authConfig from '@config/auth';
import User from "../typeorm/entities/User";

interface IRequest 
{
    name : string,
    email : string,
    password : string
}

class CreateUserService
{
    public async execute( {name, email, password} : IRequest ) : Promise<User>
    {
        const userRepository = getCustomRepository(UserRepository);
        const emailExists = await userRepository.findByEmail(email);

        if (emailExists)
        {
            throw new AppError("Email já está em uso.");
        }

        const hashedPassword = await hash(password, authConfig.jwt.salt);

        const user = userRepository.create({
            name, 
            email,
            password : hashedPassword
        })        

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;