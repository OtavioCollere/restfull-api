import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../domain/repositories/ICostumerRepository";
import { ICreateCostumer } from "../domain/models/ICreateCostumer";
import AppError from "@shared/errors/AppError";
import { IUpdateCostumer } from "../domain/models/IUpdateCostumer";
import Costumer from "../infra/typeorm/entities/Costumer";


@injectable()
class ListCostumerService{
    
    constructor(
        @inject('CostumerRepository')
        private costumerRepository : ICostumerRepository
    ) {} 

    public async execute() : Promise<Costumer[] | undefined>
    {
        const costumers = this.costumerRepository.findAll();

        return costumers;
    }
    
}

export default ListCostumerService;