import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import ProcedureRepository from "../typeorm/typeorm/repositories/ProcedureRepository";
import Procedure from "../typeorm/typeorm/entities/Procedure";


class ShowProcedureService
{
    public async execute( id : string ) : Promise<Procedure>
    {
        const procedureRepository = getCustomRepository(ProcedureRepository);
        const procedure = await procedureRepository.findById(id);
    
        if (!procedure)
        {
            throw new AppError("Procedimento não encontrado.");
        }

        return procedure;

    }
}

export default ShowProcedureService;