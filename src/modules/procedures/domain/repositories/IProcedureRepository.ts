import { ICreateProcedure } from "../models/ICreateProcedure";
import { IProcedure } from "../models/IProcedure";

export interface IProcedureRepository
{
    findById( id : string ) : Promise<IProcedure | undefined>;
    save( procedure : IProcedure ) : Promise<IProcedure>;
    create( {name, regiao, produto, preco, dataProced} : ICreateProcedure ) : Promise<IProcedure>;
    findAll( ) : Promise<IProcedure[] | undefined>;
    remove( procedure : IProcedure ) : Promise<void>;
}