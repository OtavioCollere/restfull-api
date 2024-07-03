import { Request, Response } from "express";
import ListCostumerService from "../services/ListCostumerService";
import ShowCostumerService from "../services/ShowCostumerService";
import CreateCostumerService from "../services/CreateCostumerService";
import UpdateCostumerService from "../services/UpdateCostumerService";
import DeleteCostumerService from "../services/DeleteCostumerService";

export default class CostumerController
{
    public async index(request : Request, response : Response) : Promise<Response>
    {
        const listCostumer = new ListCostumerService();
        
        const costumers = await listCostumer.execute();

        return response.json(costumers);
    }

    public async show(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const showCostumer = new ShowCostumerService();

        const costumer = await showCostumer.execute(id)

        return response.json(costumer);
    }

    public async create(request : Request, response : Response) : Promise<Response>
    {
        const {
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

        } = request.body;

        const createCostumer = new CreateCostumerService();

        const costumer = await createCostumer.execute({
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
        });

        return response.json(costumer);
    }

    public async update(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const {name, email, cpf, sexo, profissao, endereco, telefone,  telefoneEmergencia, dataNasc} = request.body;

        const updateCostumer = new UpdateCostumerService();

        const costumer = await updateCostumer.execute({id, name, email, cpf, sexo, profissao, endereco, telefone, telefoneEmergencia, dataNasc});

        return response.json(costumer);
    }

    public async delete(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const delCostumer = new DeleteCostumerService();

        const deletedCostumer = await delCostumer.execute(id); 

        return response.json(deletedCostumer);
    }

}