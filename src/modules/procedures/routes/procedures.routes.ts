import { Router } from "express";
import { Segments, celebrate } from "celebrate";
import Joi from "joi";
import ProcedureController from "../controllers/ProcedureController";

const procedureRouter = Router();
const procedureController = new ProcedureController();


// Rota para listagem de procedimentos
procedureRouter.get('/', procedureController.index);

// Rota para exibir um procedimento
procedureRouter.get('/:id', procedureController.show)

// Rota para criação de procedimento
procedureRouter.post('/:costumer_id', 
celebrate({
    [Segments.BODY]: {
        name : Joi.string().required(),
        regiao : Joi.string().required(),
        produto : Joi.string().required(),
        preco : Joi.number().required(),
        dataProced : Joi.date().required()
    }
    
}),
procedureController.create);

// Rota para atualizar os dados de um procedimento
procedureRouter.put('/:id', 
celebrate({
    [Segments.BODY] : {
        name : Joi.string().required(),
        regiao : Joi.string().required(),
        produto : Joi.string().required(),
        preco : Joi.number().required(),
        dataProced : Joi.date().required()
    }
}),
procedureController.update);

// Rota para deletar um procedimento
procedureRouter.delete('/:id', procedureController.delete)

export default procedureRouter;

