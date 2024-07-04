import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import authConfig from '@config/auth';
import ProcedureRepository from "../typeorm/typeorm/repositories/ProcedureRepository";
import CostumerRepository from "@modules/customers/typeorm/repository/CostumerRepository";
import Procedure from "../typeorm/typeorm/entities/Procedure";

interface IRequest 
{
    name : string,
    regiao : string,
    produto : string,
    preco : number,
    dataProced : Date,
    costumer_id : string
}

class CreateProcedureService
{
    public async execute( {name, regiao, produto, preco,dataProced, costumer_id} : IRequest ) : Promise<Procedure>
    {
        const procedureRepository = getCustomRepository(ProcedureRepository);
        const costumerRepository = getCustomRepository(CostumerRepository);

        const costumer = await costumerRepository.findById(costumer_id);

        if (!costumer)
        {
            throw new AppError("Erro ao vincular cliente, por favor contate a administração")
        }

        const procedure = procedureRepository.create({
            name, 
            regiao,
            produto,
            preco,
            dataProced,
            costumer
        })

        await procedureRepository.save(procedure);

        return procedure;
    }
}

export default CreateProcedureService;