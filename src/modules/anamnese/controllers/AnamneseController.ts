import { Request, Response } from "express";
import ShowAnamneseService from "../services/ShowAnamneseService";
import UpdateAnamneseService from "../services/UpdateAnamneseService";
import DeleteProcedureService from "@modules/procedures/services/DeleteProcedureService";


export default class AnamneseController
{
    // public async index(request : Request, response : Response) : Promise<Response>
    // {
    //     const listProcedure = new ListProcedureService();
        
    //     const procedures = await listProcedure.execute();

    //     return response.json(procedures);
    // }

    public async show(request : Request, response : Response) : Promise<Response>
    {
        const {id} = request.params;

        const showAnamnese = new ShowAnamneseService();

        const anamnese = await showAnamnese.execute(id)

        return response.json(anamnese);
    }

    // public async create(request : Request, response : Response) : Promise<Response>
    // {
    //     const { costumer_id } = request.params;

    //     const { name, regiao, produto, preco, dataProced } = request.body;

    //     const createProcedure = new CreateProcedureService();

    //     const procedure = await createProcedure.execute({name, regiao, produto, preco, dataProced, costumer_id});

    //     return response.json(procedure);
    // }

    public async update(request : Request, response : Response) : Promise<Response>
    {
        const {costumer_id} = request.params;

        const {        tratamentoAnterior, toxinaBotulinica, toxinaBotulinica_regiao, toxinaBotulinica_produto,
            fioSustentacao, fioSustentacao_regiao, fioSustentacao_produto, liftCirurgico, liftCirurgico_regiao,
            liftCirurgico_produto, peelingQuimico, peelingQuimico_regiao, peelingQuimico_produto,
            laser, laser_regiao, laser_produto, usaMedicamento, usaMedicamento_qual, trabalhoExpostoCalor,
            alergia, gestante_lactante, intoleranciaLactose, diabetes, roacutam, obs, tratamento } = request.body;

        const updateProcedure = new UpdateAnamneseService();

        const procedure = await updateProcedure.execute({        tratamentoAnterior, toxinaBotulinica, toxinaBotulinica_regiao, toxinaBotulinica_produto,
            fioSustentacao, fioSustentacao_regiao, fioSustentacao_produto, liftCirurgico, liftCirurgico_regiao,
            liftCirurgico_produto, peelingQuimico, peelingQuimico_regiao, peelingQuimico_produto,
            laser, laser_regiao, laser_produto, usaMedicamento, usaMedicamento_qual, trabalhoExpostoCalor,
            alergia, gestante_lactante, intoleranciaLactose, diabetes, roacutam, obs, tratamento, costumer_id
        });

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