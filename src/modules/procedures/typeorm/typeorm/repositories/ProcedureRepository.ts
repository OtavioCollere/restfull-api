import { EntityRepository, Repository } from "typeorm";
import Procedure from "../entities/Procedure";

@EntityRepository(Procedure)
class ProcedureRepository extends Repository<Procedure>
{
    public async findByCostumerId( costumer_id : string ) : Promise<Procedure| undefined>
    {
        const procedure = await this.findOne({
            where : {
                costumer_id
            }
        })

        return procedure;
    }

    public async findById( id : string ) : Promise<Procedure| undefined>
    {
        const procedure = await this.findOne({
            where : {
                id
            }
        })

        return procedure;
    }
}

export default ProcedureRepository;