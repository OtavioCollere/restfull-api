import { Router } from "express";
import { Segments, celebrate } from "celebrate";
import Joi from "joi";
import SessionsController from "../controllers/SessionController";

const sessionRouter = Router();
const sessionController = new SessionsController();

// Rota para criação de session
sessionRouter.post('/', 
celebrate({
    [Segments.BODY] : {
        email : Joi.string().email().required(),
        password : Joi.string().required()
    }
}),
sessionController.create);

export default sessionRouter;

