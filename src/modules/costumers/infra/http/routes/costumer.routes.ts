
import {Router} from 'express';
import CostumerController from '../controllers/CostumerController';
import Joi from 'joi';
import { celebrate, Segments } from 'celebrate';

const costumerRouter = Router();
const costumerController = new CostumerController();

costumerRouter.get('/', costumerController.index);

costumerRouter.get(  
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
        },
    })
,costumerController.show);

costumerRouter.post('/', 
    celebrate({
        [Segments.BODY] : {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            cpf: Joi.string().required(),
            sexo: Joi.string().required(),
            profissao: Joi.string().required(),
            endereco: Joi.string().required(),
            telefone: Joi.string().required(),
            telefoneEmergencia: Joi.string().required(),
            dataNasc: Joi.date().required(),
            tratamentoAnterior: Joi.string().required(),
            toxinaBotulinica: Joi.string().required(),
            toxinaBotulinica_regiao: Joi.string().required(),
            toxinaBotulinica_produto: Joi.string().required(),
            fioSustentacao: Joi.string().required(),
            fioSustentacao_regiao: Joi.string().required(),
            fioSustentacao_produto: Joi.string().required(),
            liftCirurgico: Joi.string().required(),
            liftCirurgico_regiao: Joi.string().required(),
            liftCirurgico_produto: Joi.string().required(),
            peelingQuimico: Joi.string().required(),
            peelingQuimico_regiao: Joi.string().required(),
            peelingQuimico_produto: Joi.string().required(),
            laser: Joi.string().required(),
            laser_regiao: Joi.string().required(),
            laser_produto: Joi.string().required(),
            usaMedicamento: Joi.string().required(),
            usaMedicamento_qual: Joi.string().required(),
            trabalhoExpostoCalor: Joi.string().required(),
            alergia: Joi.string().required(),
            gestante_lactante: Joi.string().required(),
            intoleranciaLactose: Joi.string().required(),
            diabetes: Joi.string().required(),
            roacutam: Joi.string().required(),
            obs: Joi.string().required(),
            tratamento: Joi.string().required(),
        }
    })
,costumerController.create);

costumerRouter.put('/', 
    celebrate({
        [Segments.PARAMS] : {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY] : {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            cpf: Joi.string().required(),
            sexo: Joi.string().required(),
            profissao: Joi.string().required(),
            endereco: Joi.string().required(),
            telefone: Joi.string().required(),
            telefoneEmergencia: Joi.string().required(),
            dataNasc: Joi.date().required(),
        }
    })
,costumerController.update);

costumerRouter.delete(  
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
        },
    })
,costumerController.delete);


export default costumerRouter;