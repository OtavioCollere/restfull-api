import { getRepository, Repository } from "typeorm"
import Costumer from "@modules/costumers/infra/typeorm/entities/Costumer"
import { ICostumer } from "@modules/costumers/domain/models/ICostumer";
import { ICostumerRepository } from "@modules/costumers/domain/repositories/ICostumerRepository";
import { ICreateCostumer } from "@modules/costumers/domain/models/ICreateCostumer";

class CostumerRepository implements ICostumerRepository 
{

    constructor(private ormRepository : Repository<ICostumer>)
    {
        this.ormRepository = getRepository(Costumer);
    }

    public async findById(id: string): Promise<ICostumer | undefined> {
        const costumer = await this.ormRepository.findOne({
            where : {
                id
            }
        })

        return costumer;
    }

    public async findByCpf(cpf: string): Promise<ICostumer | undefined> {
        const costumer = await this.ormRepository.findOne({
            where : {
                cpf
            }
        })

        return costumer;
    }

    public async findByEmail(email: string): Promise<ICostumer | undefined> {
        const costumer = await this.ormRepository.findOne({
            where : {
                email
            }
        })

        return costumer;
    }

    public async create({} : ICreateCostumer): Promise<ICostumer> {
        
        const costumer = this.ormRepository.create({});

        await this.ormRepository.save(costumer);

        return costumer;
    }

    public async save(costumer: ICostumer): Promise<ICostumer> {
        
        await this.ormRepository.save(costumer);

        return costumer;
    }

    public async findAll(): Promise<ICostumer[] | undefined> {
        const costumers = await this.ormRepository.find();

        return costumers;
    }

    public async remove(costumer: ICostumer): Promise<void> {
        
        await this.ormRepository.remove(costumer);

    }

}

export default CostumerRepository;