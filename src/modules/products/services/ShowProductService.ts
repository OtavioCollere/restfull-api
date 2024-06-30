import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";
import AppError from "@shared/http/errors/AppError";

class ShowProductService
{
    public async execute( id : string ) : Promise<Product | undefined>
    {

        const productRepository = getCustomRepository(ProductRepository);
        
        const product = await productRepository.findById(id);

        if ( !product )
        {
            throw new AppError("Product not found");
        }

        return product;
    }
}

export default ShowProductService;