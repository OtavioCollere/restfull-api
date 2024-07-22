import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import Procedure from "../infra/typeorm/entities/Procedure";
import { IProcedureRepository } from "../domain/repositories/IProcedureRepository";


@injectable()
class ShowProcedureService{
    
    constructor(
        @inject('ProcedureRepository')
        private procedureRepository : IProcedureRepository
    ) {} 

    public async execute(id : string) : Promise<Procedure | undefined>
    {
        const procedure = this.procedureRepository.findById(id)

        if ( !procedure )
        {
            throw new AppError("Procedimento não encontrado.");
        }

        return procedure;
    }
    
}

export default ShowProcedureService;