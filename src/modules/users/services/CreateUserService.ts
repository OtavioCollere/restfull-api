import AppError from "@shared/http/errors/AppError";
import { UserRepository } from "../typeorm/repositories/UsersRepository";
import { getCustomRepository } from "typeorm";

interface IRequest {
    name : string,
    email : string, 
    password : string,
    avatar : string
}

class CreateUserService
{
    public async execute({name, email, password, avatar} : IRequest)
    {
        
        const userRepository = getCustomRepository(UserRepository);
        const userExists = await userRepository.findByEmail(email);

        if ( userExists )
        {
            throw new AppError('This email already exists!');
        }

        const user = userRepository.create({name, email, password, avatar});

        await userRepository.save(user)

        return user;

    }

}

export default CreateUserService;