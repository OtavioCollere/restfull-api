import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import CostumerRepository from "../typeorm/repository/CostumerRepository";
import Costumer from "../typeorm/entities/Costumer";
import AnamneseRepository from "@modules/anamnese/typeorm/repositories/AnamneseRepository";
import Anamnese from "@modules/anamnese/typeorm/entities/Anamnese";

interface IRequest 
{
    name : string,
    email : string,
    cpf : string,
    sexo : string,
    profissao : string,
    endereco : string,
    telefone : string,
    telefoneEmergencia : string,
    dataNasc : Date

    tratamentoAnterior : string, 
    toxinaBotulinica : string, 
    toxinaBotulinica_regiao : string, 
    toxinaBotulinica_produto : string,
    fioSustentacao : string, 
    fioSustentacao_regiao : string, 
    fioSustentacao_produto : string,
    liftCirurgico : string, 
    liftCirurgico_regiao : string, 
    liftCirurgico_produto : string,
    peelingQuimico : string, 
    peelingQuimico_regiao : string, 
    peelingQuimico_produto : string,
    laser : string, 
    laser_regiao : string, 
    laser_produto : string,
    usaMedicamento : string, 
    usaMedicamento_qual : string, 
    trabalhoExpostoCalor : string,
    alergia : string, 
    gestante_lactante : string, 
    intoleranciaLactose : string, 
    diabetes : string,
    roacutam : string, 
    obs : string, 
    tratamento : string
}

interface IResponse
{
    costumer : Costumer,
    anamnese : Anamnese
}

class CreateCostumerService
{
    public async execute( {
        // informacoes do usuario
        name, email, cpf, sexo, profissao, endereco, telefone, telefoneEmergencia, dataNasc,
        
        // informacoes da anamnese
        tratamentoAnterior, 
        toxinaBotulinica, toxinaBotulinica_regiao, toxinaBotulinica_produto,
        fioSustentacao, fioSustentacao_regiao, fioSustentacao_produto,
        liftCirurgico, liftCirurgico_regiao, liftCirurgico_produto,
        peelingQuimico, peelingQuimico_regiao, peelingQuimico_produto,
        laser, laser_regiao, laser_produto,
        usaMedicamento, usaMedicamento_qual, trabalhoExpostoCalor,
        alergia, gestante_lactante, intoleranciaLactose, diabetes,
        roacutam, obs, tratamento

    } : IRequest ) : Promise<IResponse>
    {
        const costumerRepository = getCustomRepository(CostumerRepository);
        const anamneseRepository = getCustomRepository(AnamneseRepository);

        const cpfExists = await costumerRepository.findByEmail(cpf);
        const emailExists = await costumerRepository.findByEmail(email);

        if (cpfExists || emailExists)
        {
            throw new AppError("CPF/Email já está em uso em outra conta.");
        }

        const costumer = costumerRepository.create({
            name, 
            email,
            cpf,
            sexo,
            profissao,
            endereco,
            telefone,
            telefoneEmergencia,
            dataNasc
        })        

        const anamnese = anamneseRepository.create({
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
            tratamento,
            costumer
        })

        await costumerRepository.save(costumer);
        await anamneseRepository.save(anamnese);

        return {
            costumer,
            anamnese
        };
    }
}

export default CreateCostumerService;