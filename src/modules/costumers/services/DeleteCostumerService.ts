import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../domain/repositories/ICostumerRepository";
import AppError from "@shared/errors/AppError";
import Costumer from "../infra/typeorm/entities/Costumer";


@injectable()
class DeleteCostumerService{
    
    constructor(
        @inject('CostumerRepository')
        private costumerRepository : ICostumerRepository
    ) {} 

    public async execute(id : string) : Promise<void>
    {
        const costumer = await this.costumerRepository.findById(id)

        if ( !costumer )
        {
            throw new AppError("Cliente não encontrado.");
        }

        await this.costumerRepository.remove(costumer);
    }
    
}

export default DeleteCostumerService;