import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import AppError from "@shared/http/errors/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import AuthConfig from '@config/auth/Auth';
import User from "../typeorm/entities/User";

interface IRequest
{
    email : string,
    password : string
}

interface IResponse
{
    user: User,
    token : string
}

class CreateUserSession
{

    public async execute( {email, password} : IRequest ) : Promise<IResponse>
    {
       
        const userRepository = getCustomRepository(UsersRepository);
        const user = await userRepository.findByEmail(email);

        if (!user)
        {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const confirmedPassword = await compare(user.password, password);

        if (!confirmedPassword)
        {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const token = sign({}, AuthConfig.jwt.secret, {
            subject : user.id,
            expiresIn : AuthConfig.jwt.expiresIn
        })

        return {
            user,
            token
        }
        

    }

}

export default CreateUserSession;