import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";
import AppError from "@shared/http/errors/AppError";


interface IRequest
{
    id : string;
}

class DeleteProductService
{

    public async execute( {id} : IRequest ) : Promise<void>
    {

        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.findOne(id);

        if (!product)
        {
            throw new AppError("Product not found / invalid ID");
        }

        await productRepository.delete(product);
    }

}

export default DeleteProductService;