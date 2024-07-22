import { inject, injectable } from "tsyringe";
import { ICostumerRepository } from "../domain/repositories/ICostumerRepository";
import { ICreateCostumer } from "../domain/models/ICreateCostumer";
import AppError from "@shared/errors/AppError";


@injectable()
class CreateCostumerService{
    
    constructor(
        @inject('CostumerRepository')
        private costumerRepository : ICostumerRepository
    ) {} 

    public async execute( {
        name,
        email,
        cpf,
        sexo,
        profissao,
        endereco,
        telefone,
        telefoneEmergencia,
        dataNasc,
        tratamentoAnterior,
        toxinaBotulinica,
        toxinaBotulinica_regiao,
        toxinaBotulinica_produto,
        fioSustentacao,
        fioSustentacao_regiao,
        fioSustentacao_produto,
        liftCirurgico,
        liftCirurgico_regiao,
        liftCirurgico_produto,
        peelingQuimico,
        peelingQuimico_regiao,
        peelingQuimico_produto,
        laser,
        laser_regiao,
        laser_produto,
        usaMedicamento,
        usaMedicamento_qual,
        trabalhoExpostoCalor,
        alergia,
        gestante_lactante,
        intoleranciaLactose,
        diabetes,
        roacutam,
        obs,
        tratamento
    } : ICreateCostumer )
    {

        const cpfExists = await this.costumerRepository.findByCpf(cpf);

        if (!cpfExists)
        {
            throw new AppError("CPF já cadastrado");
        }

        const emailExists = await this.costumerRepository.findByEmail(email);

        if (!emailExists)
        {
            throw new AppError("Email já cadastrado");
        }

        const costumer = await this.costumerRepository.create({
            name,
            email,
            cpf,
            sexo,
            profissao,
            endereco,
            telefone,
            telefoneEmergencia,
            dataNasc,
            tratamentoAnterior,
            toxinaBotulinica,
            toxinaBotulinica_regiao,
            toxinaBotulinica_produto,
            fioSustentacao,
            fioSustentacao_regiao,
            fioSustentacao_produto,
            liftCirurgico,
            liftCirurgico_regiao,
            liftCirurgico_produto,
            peelingQuimico,
            peelingQuimico_regiao,
            peelingQuimico_produto,
            laser,
            laser_regiao,
            laser_produto,
            usaMedicamento,
            usaMedicamento_qual,
            trabalhoExpostoCalor,
            alergia,
            gestante_lactante,
            intoleranciaLactose,
            diabetes,
            roacutam,
            obs,
            tratamento
        })

        return costumer;
    }
    
}

export default CreateCostumerService;