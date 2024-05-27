import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../typeorm/repositories/ProductsRepository"
import AppError from "@shared/http/errors/AppError";

interface IRequest {
    id: string
}

class ListProductService
{
    public async execute({id} : IRequest)
    {
        const productsRepository = getCustomRepository(ProductRepository);

        const product = productsRepository.findOne(id);

        if (!product)
        {
            throw new AppError("Product not found");
        }

        return product;
    }
}


export default ListProductService;