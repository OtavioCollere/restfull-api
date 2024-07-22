import CreateProcedureService from "@modules/procedures/services/CreateProcedureService";
import DeleteProcedureService from "@modules/procedures/services/DeleteProcedureService";
import ListProcedureService from "@modules/procedures/services/ListProcedureService";
import ShowProcedureService from "@modules/procedures/services/ShowProcedureService";
import UpdateProcedureService from "@modules/procedures/services/UpdateProcedureService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class ProcedureController
{
    
    public async index(request : Request, response : Response) : Promise<Response>
    {
        const listProcedureService = container.resolve(ListProcedureService);

        const procedures = await listProcedureService.execute();

        return response.json(procedures);
    }

    public async create(request : Request, response : Response) : Promise<Response>
    {

        const {name, regiao, produto, preco, dataProced} = request.body;

        const createProcedure = container.resolve(CreateProcedureService);

        const procedure = await createProcedure.execute({name, regiao, produto, preco, dataProced});

        return response.json(procedure);
    }

    public async update(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const {name, regiao, produto, preco, dataProced} = request.body;

        const updateProcedure = container.resolve(UpdateProcedureService);

        const procedure = await updateProcedure.execute({id, name, regiao, produto, preco, dataProced});

        return response.json(procedure);
    }

    public async show(request : Request, response : Response) : Promise<Response> 
    {
        const {id} = request.params;
        
        const showProcedure = container.resolve(ShowProcedureService);

        const procedure = await showProcedure.execute(id);

        return response.json(procedure);
    }

    public async delete(request : Request, response : Response) : Promise<void> 
    {
        const {id} = request.params;
        
        const deleteProcedure = container.resolve(DeleteProcedureService);

        await deleteProcedure.execute(id);
    }
}