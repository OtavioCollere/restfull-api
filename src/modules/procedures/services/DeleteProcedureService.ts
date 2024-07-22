import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { ICreateProcedure } from "../domain/models/ICreateProcedure";
import { IProcedureRepository } from "../domain/repositories/IProcedureRepository";
import Procedure from "../infra/typeorm/entities/Procedure";


@injectable()
class DeleteProcedureService{
    
    constructor(
        @inject('ProcedureRepository')
        private procedureRepository : IProcedureRepository
    ) {} 

    public async execute( id : string ) : Promise<void>
    {

        const procedure = await this.procedureRepository.findById(id);

        if (!procedure)
        {
            throw new AppError("Procedimento não encontrado.")
        }

        await this.procedureRepository.remove(procedure);

    }
    
}

export default DeleteProcedureService;