
import AppError from "@shared/errors/AppError";
import authConfig from '@config/auth';
import User from "../typeorm/entities/User";
import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repositories/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest 
{
    email : string,
    password : string
}

interface IResponse
{
    user : User
    token : string
}

class CreateSessionService
{
    public async execute( {email, password} : IRequest ) : Promise<IResponse>
    {
       const userRepository = getCustomRepository(UserRepository);
       const user = await userRepository.findByEmail(email);

       if (!user)
       {
        throw new AppError("Erro na validação de Email/Senha", 401);
       }

       const confirmedPassword = await compare(password, user.password);

       if (!confirmedPassword)
       {
        throw new AppError("Erro na validação de Email/Senha", 401);
       }

       const token = sign({}, authConfig.jwt.secret, {
        subject : user.id,
        expiresIn : authConfig.jwt.expiresIn
       })

       return{
        user,
        token
       }

    }
}

export default CreateSessionService;