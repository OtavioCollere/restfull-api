import { getCustomRepository } from "typeorm";
import CostumerRepository from "@modules/customers/typeorm/repository/CostumerRepository";
import Procedure from "../typeorm/typeorm/entities/Procedure";
import ProcedureRepository from "../typeorm/typeorm/repositories/ProcedureRepository";

class ListProcedureService
{
    public async execute() : Promise<Procedure[]>
    {
        const procedureRepository = getCustomRepository(ProcedureRepository);

        const procedures = await procedureRepository.find();
        
        return procedures;
    }
}

export default ListProcedureService;