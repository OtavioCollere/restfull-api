import { Router } from "express";
import { Segments, celebrate } from "celebrate";
import Joi from "joi";
import AnamneseController from "../controllers/AnamneseController";


const anamneseRouter = Router();
const anamneseController = new AnamneseController();


// Rota para exibir um procedimento
anamneseRouter.get('/:id', anamneseController.show)


// Rota para atualizar os dados de um procedimento
anamneseRouter.put('/:id', 
celebrate({
    [Segments.BODY] : {
        dataNasc: Joi.date().required(),
        tratamentoAnterior: Joi.string().required(),
        toxinaBotulinica: Joi.string().required(),
        toxinaBotulinica_regiao: Joi.string(),
        toxinaBotulinica_produto: Joi.string(),
        fioSustentacao: Joi.string().required(),
        fioSustentacao_regiao: Joi.string(),
        fioSustentacao_produto: Joi.string(),
        liftCirurgico: Joi.string().required(),
        liftCirurgico_regiao: Joi.string(),
        liftCirurgico_produto: Joi.string(),
        peelingQuimico: Joi.string().required(),
        peelingQuimico_regiao: Joi.string(),
        peelingQuimico_produto: Joi.string(),
        laser: Joi.string().required(),
        laser_regiao: Joi.string(),
        laser_produto: Joi.string(),
        usaMedicamento: Joi.string().required(),
        usaMedicamento_qual: Joi.string(),
        trabalhoExpostoCalor: Joi.string().required(),
        alergia: Joi.string().required(),
        gestante_lactante: Joi.string().required(),
        intoleranciaLactose: Joi.string().required(),
        diabetes: Joi.string().required(),
        roacutam: Joi.string().required(),
        obs: Joi.string().required(),
        tratamento: Joi.string().required(),
    }
}),
anamneseController.update);

// Rota para deletar um procedimento
anamneseRouter.delete('/:id', anamneseController.delete)

export default anamneseRouter;

