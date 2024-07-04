import { Router } from "express";
import UserController from "../controllers/UserController";
import { Segments, celebrate } from "celebrate";
import Joi from "joi";

const userRouter = Router();
const userController = new UserController();

// Rota para criação de usuário
userRouter.post('/', 
celebrate({
    [Segments.BODY] : {
        name : Joi.string().required(),
        email : Joi.string().email().required(),
        password : Joi.string().required()
    }
}),
userController.create);

export default userRouter;

