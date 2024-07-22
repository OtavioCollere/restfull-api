import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { ICreateProcedure } from "../domain/models/ICreateProcedure";
import { IProcedureRepository } from "../domain/repositories/IProcedureRepository";
import Procedure from "../infra/typeorm/entities/Procedure";
import { IUpdateProcedure } from "../domain/models/IUpdateProcedure";


@injectable()
class UpdateProcedureService{
    
    constructor(
        @inject('ProcedureRepository')
        private procedureRepository : IProcedureRepository
    ) {} 

    public async execute( { id, name, regiao, produto, preco, dataProced } : IUpdateProcedure ) : Promise<Procedure | undefined>
    {

        const procedure = await this.procedureRepository.findById(id);

        if (!procedure)
        {
            throw new AppError("Procedimento não encontrado");
        }

        procedure.name = name;
        procedure.regiao = regiao;
        procedure.produto = produto;
        procedure.preco = preco;
        procedure.dataProced = dataProced;

        await this.procedureRepository.save(procedure);

        return procedure;
        
    }
    
}

export default UpdateProcedureService;