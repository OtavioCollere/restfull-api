import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import Procedure from "../infra/typeorm/entities/Procedure";
import { IProcedureRepository } from "../domain/repositories/IProcedureRepository";


@injectable()
class ListProcedureService{
    
    constructor(
        @inject('ProcedureRepository')
        private procedureRepository : IProcedureRepository
    ) {} 

    public async execute() : Promise<Procedure[] | undefined>
    {
        const procedures = await this.procedureRepository.findAll();

        return procedures;
    }
    
}

export default ListProcedureService;