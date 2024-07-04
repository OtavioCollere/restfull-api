import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import CostumerRepository from "../typeorm/repository/CostumerRepository";
import Costumer from "../typeorm/entities/Costumer";

interface IRequest 
{
    id : string,
    name : string,
    email : string,
    cpf : string,
    sexo : string,
    profissao : string,
    endereco : string,
    telefone : string,
    telefoneEmergencia : string,
    dataNasc : Date
}

class UpdateCostumerService
{
    public async execute( {id, name, email, cpf, sexo, profissao, endereco, telefone, telefoneEmergencia, dataNasc} : IRequest ) : Promise<Costumer>
    {
        const costumerRepository = getCustomRepository(CostumerRepository);
        const costumer = await costumerRepository.findById(id);
    
        if (!costumer)
        {
            throw new AppError("Usuário não encontrado.");
        }

        const costumerExists = await costumerRepository.findByEmail(email);

        if ( costumerExists && email !== costumer.email )
        {
            throw new AppError("Email já cadastrado em outra conta.");
        }

        costumer.name = name;
        costumer.email = email;
        costumer.cpf = cpf;
        costumer.sexo = sexo;
        costumer.profissao = profissao;
        costumer.endereco = endereco;
        costumer.telefone = telefone;
        costumer.telefoneEmergencia = telefoneEmergencia;
        costumer.dataNasc = dataNasc;

        await costumerRepository.save(costumer);

        return costumer;

    }
}

export default UpdateCostumerService;