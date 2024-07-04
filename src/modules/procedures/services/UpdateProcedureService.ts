import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import authConfig from '@config/auth';
import ProcedureRepository from "../typeorm/typeorm/repositories/ProcedureRepository";
import CostumerRepository from "@modules/customers/typeorm/repository/CostumerRepository";
import Procedure from "../typeorm/typeorm/entities/Procedure";

interface IRequest 
{
    id : string, 
    name : string,
    regiao : string,
    produto : string,
    preco : number,
    dataProced : Date,
}

class UpdateProcedureService
{
    public async execute( {id, name, regiao, produto, preco,dataProced} : IRequest ) : Promise<Procedure>
    {
        const procedureRepository = getCustomRepository(ProcedureRepository);

        const procedure = await procedureRepository.findById(id);

        if (!procedure)
        {
            throw new AppError("Procedimento não encontrado!")
        }

        procedure.name = name;
        procedure.regiao = regiao;
        procedure.produto = produto;
        procedure.preco = preco;
        procedure.dataProced = dataProced;

        await procedureRepository.save(procedure);

        return procedure;
    }
}

export default UpdateProcedureService;