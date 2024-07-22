import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../domain/repositories/ICostumerRepository";
import AppError from "@shared/errors/AppError";
import Costumer from "../infra/typeorm/entities/Costumer";


@injectable()
class ShowCostumerService{
    
    constructor(
        @inject('CostumerRepository')
        private costumerRepository : ICostumerRepository
    ) {} 

    public async execute(id : string) : Promise<Costumer | undefined>
    {
        const costumer = this.costumerRepository.findById(id)

        if ( !costumer )
        {
            throw new AppError("Cliente não encontrado.");
        }

        return costumer;
    }
    
}

export default ShowCostumerService;