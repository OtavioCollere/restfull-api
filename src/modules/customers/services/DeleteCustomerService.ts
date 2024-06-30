import { getCustomRepository } from "typeorm";
import AppError from "@shared/http/errors/AppError";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";


interface IRequest
{
    id : string;
}

class DeleteCustomerService
{

    public async execute( {id} : IRequest ) : Promise<void>
    {

        const customerRepository = getCustomRepository(CustomerRepository);
        const customer = await customerRepository.findOne(id);

        if (!customer)
        {
            throw new AppError("Customer not found / invalid ID");
        }

        await customerRepository.delete(customer);
    }

}

export default DeleteCustomerService;