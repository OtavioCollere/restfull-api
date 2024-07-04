import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import CostumerRepository from "../typeorm/repository/CostumerRepository";
import Costumer from "../typeorm/entities/Costumer";


class DeleteCostumerService
{
    public async execute( id : string ) : Promise<Costumer>
    {
        const costumerRepository = getCustomRepository(CostumerRepository);
        const costumer = await costumerRepository.findById(id);
    
        if (!costumer)
        {
            throw new AppError("Usuário não encontrado.");
        }

        await costumerRepository.delete(costumer);

        return costumer;

    }
}

export default DeleteCostumerService;