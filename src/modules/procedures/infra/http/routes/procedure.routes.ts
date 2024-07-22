import {Router} from 'express';
import Joi from 'joi';
import { celebrate, Segments } from 'celebrate';
import ProcedureController from '../controllers/ProcedureController';

const procedureRouter = Router();
const procedureController = new ProcedureController();

procedureRouter.get('/', procedureController.index);

procedureRouter.get(  
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
        },
    })
,procedureController.show);

procedureRouter.post('/', 
    celebrate({
        [Segments.BODY] : {
            name: Joi.string().required(),
            regiao: Joi.string().email().required(),
            produto: Joi.string().required(),
            preco: Joi.string().required(),
            dataProced: Joi.date().required(),
        }
    })
,procedureController.create);

procedureRouter.put('/', 
    celebrate({
        [Segments.PARAMS] : {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY] : {
            name: Joi.string().required(),
            regiao: Joi.string().email().required(),
            produto: Joi.string().required(),
            preco: Joi.string().required(),
            dataProced: Joi.date().required(),
        }
    })
,procedureController.update);

procedureRouter.delete(  
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
        },
    })
,procedureController.delete);


export default procedureRouter;