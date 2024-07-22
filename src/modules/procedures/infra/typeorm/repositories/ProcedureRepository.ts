import { getRepository, Repository } from "typeorm"
import { IProcedureRepository } from "@modules/procedures/domain/repositories/IProcedureRepository";
import { ICreateProcedure } from "@modules/procedures/domain/models/ICreateProcedure";
import Procedure from "../entities/Procedure";
import { IProcedure } from "@modules/procedures/domain/models/IProcedure";

class ProcedureRepository implements IProcedureRepository 
{

    constructor(private ormRepository : Repository<IProcedure>)
    {
        this.ormRepository = getRepository(Procedure);
    }

    public async findById(id: string): Promise<IProcedure | undefined> {
        const procedure = await this.ormRepository.findOne({
            where : {
                id
            }
        })

        return procedure;
    }

    public async create({name, regiao, produto, preco, dataProced} : ICreateProcedure): Promise<IProcedure> {
        
        const procedure = this.ormRepository.create({});

        await this.ormRepository.save(procedure);

        return procedure;
    }

    public async save(procedure: IProcedure): Promise<IProcedure> {
        
        await this.ormRepository.save(procedure);

        return procedure;
    }

    public async findAll(): Promise<IProcedure[] | undefined> {
        const procedures = await this.ormRepository.find();

        return procedures;
    }

    public async remove(procedure: IProcedure): Promise<void> {
        
        await this.ormRepository.remove(procedure);

    }

}

export default ProcedureRepository;