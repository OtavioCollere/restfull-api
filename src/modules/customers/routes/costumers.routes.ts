import { Router } from "express";
import { Segments, celebrate } from "celebrate";
import Joi from "joi";
import CostumerController from "../controllers/CostumerController";

const costumerRouter = Router();
const costumerController = new CostumerController();

// Rota para listagem de clientes
costumerRouter.get('/', costumerController.index);

// Rota para exibir um cliente
costumerRouter.get('/:id', costumerController.show)

// Rota para criação de cliente
costumerRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        cpf: Joi.string().max(11).required(),
        sexo: Joi.string().max(1).required(),
        profissao: Joi.string().required(),
        endereco: Joi.string().required(),
        telefone: Joi.string().required(),
        telefoneEmergencia : Joi.string().required(),
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
costumerController.create);

// Rota para atualizar os dados de um cliente
costumerRouter.put('/:id', 
celebrate({
    [Segments.BODY] : {
        name : Joi.string().required(),
        email : Joi.string().email().required(),
        cpf : Joi.string().max(11).required(),
        sexo : Joi.string().max(1).required(),
        profissao : Joi.string().required(),
        endereco : Joi.string().required(),
        telefone : Joi.string().required(),
        dataNasc : Joi.date().required()
    }
}),
costumerController.update);

// Rota para deletar um cliente
costumerRouter.delete('/:id', costumerController.delete)

export default costumerRouter;

