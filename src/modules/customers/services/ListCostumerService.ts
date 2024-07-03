import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import CostumerRepository from "../typeorm/repository/CostumerRepository";
import Costumer from "../typeorm/entities/Costumer";

class ListCostumerService
{
    public async execute() : Promise<Costumer[]>
    {
        const costumerRepository = getCustomRepository(CostumerRepository);

        const costumers = await costumerRepository.find();

        return costumers;
    }
}

export default ListCostumerService;