import { ICostumer } from "../models/ICostumer";
import { ICreateCostumer } from "../models/ICreateCostumer";

export interface ICostumerRepository
{
    findById( id: string ) : Promise<ICostumer | undefined>;
    findByCpf( cpf: string ) : Promise<ICostumer | undefined>;
    findByEmail( email : string ) : Promise<ICostumer | undefined>;
    save( costumer : ICostumer ) : Promise<ICostumer>;
    create( {} : ICreateCostumer ) : Promise<ICostumer>;
    findAll( ) : Promise<ICostumer[] | undefined>;
    remove( costumer : ICostumer ) : Promise<void>;
}