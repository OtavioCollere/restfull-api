import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import CostumerRepository from "../typeorm/repository/CostumerRepository";
import Costumer from "../typeorm/entities/Costumer";

class ShowCostumerService
{
    public async execute( id : string ) : Promise<Costumer>
    {
        const costumerRepository = getCustomRepository(CostumerRepository);
        const costumer = await costumerRepository.findById(id);

        if (!costumer)
        {
            throw new AppError("Usuário não encontrado!");
        }

        return costumer;

    }
}

export default ShowCostumerService;