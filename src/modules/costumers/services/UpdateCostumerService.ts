import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../domain/repositories/ICostumerRepository";
import { ICreateCostumer } from "../domain/models/ICreateCostumer";
import AppError from "@shared/errors/AppError";
import { IUpdateCostumer } from "../domain/models/IUpdateCostumer";


@injectable()
class UpdateCostumerService{
    
    constructor(
        @inject('CostumerRepository')
        private costumerRepository : ICostumerRepository
    ) {} 

    public async execute( {
        id,
        name,
        email,
        cpf,
        sexo,
        profissao,
        endereco,
        telefone,
        telefoneEmergencia,
        dataNasc,
    } : IUpdateCostumer )
    {

        const costumer = await this.costumerRepository.findById(id);

        if (!costumer)
        {
            throw new AppError("Costumer not found");
        }

        costumer.name = name;
        costumer.email = email;
        costumer.cpf = cpf;
        costumer.sexo = sexo;
        costumer.profissao = profissao;
        costumer.endereco = endereco;
        costumer.telefone = telefone;
        costumer.telefoneEmergencia = telefoneEmergencia;
        costumer.dataNasc = dataNasc

        await this.costumerRepository.save(costumer);

        return costumer;
    }
    
}

export default UpdateCostumerService;