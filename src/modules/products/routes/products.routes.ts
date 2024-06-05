import { Router } from 'express';
import ProductController from '../controllers/ProductsController';
import {celebrate, Joi, Segments} from 'celebrate';

const productController = new ProductController();

const productsRouter = Router();

productsRouter.get('/', productController.index);

productsRouter.get('/:id',
celebrate({
    [Segments.BODY] : {
        id : Joi.string().uuid().required(),
    }
}),
productController.show);

productsRouter.post('/', 

celebrate({
    [Segments.BODY] : {
        name : Joi.string().required(),
        price : Joi.number().precision(2).required(),
        quantity : Joi.number().required()
    }
}),
productController.create);

productsRouter.put('/', productController.update);

productsRouter.delete('/:id', productController.delete)

export default productsRouter;