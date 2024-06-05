import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import UsersController from '../controller/UsersController';

const userController = new UsersController();

const userRouter = Router();

userRouter.get('/', userController.index());

export default userRouter;