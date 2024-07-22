import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { ICreateProcedure } from "../domain/models/ICreateProcedure";
import { IProcedureRepository } from "../domain/repositories/IProcedureRepository";
import Procedure from "../infra/typeorm/entities/Procedure";


@injectable()
class CreateProcedureService{
    
    constructor(
        @inject('ProcedureRepository')
        private procedureRepository : IProcedureRepository
    ) {} 

    public async execute( { name, regiao, produto, preco, dataProced } : ICreateProcedure ) : Promise<Procedure | undefined>
    {

        const procedure = this.procedureRepository.create({name, regiao, produto, preco, dataProced});

        return procedure;
        
    }
    
}

export default CreateProcedureService;