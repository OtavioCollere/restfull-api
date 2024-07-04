import { Request, Response } from "express";
import ListProcedureService from "../services/ListProcedure";
import ShowProcedureService from "../services/ShowProcedureService";
import CreateProcedureService from "../services/CreateProcedureService";
import UpdateProcedureService from "../services/UpdateProcedureService";
import DeleteProcedureService from "../services/DeleteProcedureService";


export default class ProcedureController
{
    public async index(request : Request, response : Response) : Promise<Response>
    {
        const listProcedure = new ListProcedureService();
        
        const procedures = await listProcedure.execute();

        return response.json(procedures);
    }

    public async show(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const showProcedure = new ShowProcedureService();

        const procedure = await showProcedure.execute(id)

        return response.json(procedure);
    }

    public async create(request : Request, response : Response) : Promise<Response>
    {
        const { costumer_id } = request.params;

        const { name, regiao, produto, preco, dataProced } = request.body;

        const createProcedure = new CreateProcedureService();

        const procedure = await createProcedure.execute({name, regiao, produto, preco, dataProced, costumer_id});

        return response.json(procedure);
    }

    public async update(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const {name, regiao, produto, preco, dataProced} = request.body;

        const updateProcedure = new UpdateProcedureService();

        const procedure = await updateProcedure.execute({id, name, regiao, produto, preco, dataProced});

        return response.json(procedure);
    }

    public async delete(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const delProcedure = new DeleteProcedureService();

        const deletedProcedure = await delProcedure.execute(id); 

        return response.json(deletedProcedure);
    }

}