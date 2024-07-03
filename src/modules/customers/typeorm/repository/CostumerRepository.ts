import { EntityRepository, Repository } from "typeorm";
import Costumer from "../entities/Costumer";

@EntityRepository(Costumer)
class CostumerRepository extends Repository<Costumer>
{
    public async findByEmail( email : string ) : Promise<Costumer | undefined>
    {
        const costumer = await this.findOne({
            where : {
                email
            }
        })

        return costumer;
    }

    public async findByCpf( cpf : string ) : Promise<Costumer | undefined>
    {
        const costumer = await this.findOne({
            where : {
                cpf
            }
        })

        return costumer;
    }

    public async findById( id : string ) : Promise<Costumer | undefined>
    {
        const costumer = await this.findOne({
            where : {
                id
            }
        })

        return costumer;
    }
}

export default CostumerRepository;