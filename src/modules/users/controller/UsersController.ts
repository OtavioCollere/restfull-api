import { Request, Response } from "express";
import User from "../typeorm/entities/User";

import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";

export default class UsersController
{
    public async index(request: Request, response: Response) : Promise<Response>
    {
        const listUsers = new ListUserService();
        
        const list = await listUsers.execute();

        return response.json(list);
    }

    public async create(request: Request, response: Response) : Promise<Response>
    {
        const { name, email, password, avatar } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({name, email, password, avatar});

        return response.json(user);
    }
}