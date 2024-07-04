import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import Anamnese from "../typeorm/entities/Anamnese";
import AnamneseRepository from "../typeorm/repositories/AnamneseRepository";

class DeleteAnamneseService
{
    public async execute( costumer_id : string ) : Promise<Anamnese>
    {
        const anamneseRepository = getCustomRepository(AnamneseRepository);
        const anamnese = await anamneseRepository.findByCostumerId(costumer_id);

        if (!anamnese)
        {
            throw new AppError("Anamnese não encontrada!");
        }

        await anamneseRepository.delete(anamnese);

        return anamnese;

    }
}

export default DeleteAnamneseService;