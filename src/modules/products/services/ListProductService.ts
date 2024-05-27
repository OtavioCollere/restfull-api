import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../typeorm/repositories/ProductsRepository"

class ListProductService
{
    public async execute()
    {
        const productsRepository = getCustomRepository(ProductRepository);

        const products = productsRepository.find();

        return products
    }
}


export default ListProductService;