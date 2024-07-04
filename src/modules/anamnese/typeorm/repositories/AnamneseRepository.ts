import { EntityRepository, Repository } from "typeorm";
import Anamnese from "../entities/Anamnese";

@EntityRepository(Anamnese)
class AnamneseRepository extends Repository<Anamnese>
{
    public async findByCostumerId( costumer_id : string ) : Promise<Anamnese | undefined>
    {
        const anamnese = await this.findOne({
            where : {
                costumer_id
            }
        })

        return anamnese;
    }

  
}

export default AnamneseRepository;