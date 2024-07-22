import CreateCostumerService from "@modules/costumers/services/CreateCostumerService";
import DeleteCostumerService from "@modules/costumers/services/DeleteCostumerService";
import ListCostumerService from "@modules/costumers/services/ListCostumerService";
import ShowCostumerService from "@modules/costumers/services/ShowCostumerService";
import UpdateCostumerService from "@modules/costumers/services/UpdateCostumerService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class CostumerController
{
    
    public async index(request : Request, response : Response) : Promise<Response>
    {
        const listCostumerService = container.resolve(ListCostumerService);

        const costumers = await listCostumerService.execute();

        return response.json(costumers);
    }

    public async create(request : Request, response : Response) : Promise<Response>
    {

        const {
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
        } = request.body;

        const createCostumer = container.resolve(CreateCostumerService);

        const costumer = await createCostumer.execute({
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
        });

        return response.json(costumer);
    }

    public async update(request : Request, response : Response) : Promise<Response>
    {

        const {id} = request.params;

        const {
            name,
            email,
            cpf,
            sexo,
            profissao,
            endereco,
            telefone,
            telefoneEmergencia,
            dataNasc,
        } = request.body;

        const updateCostumer = container.resolve(UpdateCostumerService);

        const costumer = await updateCostumer.execute({
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
        });

        return response.json(costumer);
    }

    public async show(request : Request, response : Response) : Promise<Response> 
    {
        const {id} = request.params;
        
        const showCostumer = container.resolve(ShowCostumerService);

        const costumer = await showCostumer.execute(id);

        return response.json(costumer);
    }

    public async delete(request : Request, response : Response) : Promise<void> 
    {
        const {id} = request.params;
        
        const deleteCostumer = container.resolve(DeleteCostumerService);

        await deleteCostumer.execute(id);
    }
}