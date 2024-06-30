import { getCustomRepository } from "typeorm";
import AppError from "@shared/http/errors/AppError";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";
import Customer from "../typeorm/entities/Customer";


interface IRequest
{
    id : string;
    name : string;
    email : string;
}

class UpdateCostumerService
{

    public async execute( {id, name, email} : IRequest ) : Promise<Customer | undefined>
    {

        const customerRepository = getCustomRepository(CustomerRepository);
        const customer = await customerRepository.findOne(id);

        if (!customer)
        {
            throw new AppError("Customer not found / invalid ID");
        }

        const customerExists = await customerRepository.findByName(name);

        if (customerExists)
        {
            throw new AppError("There is already one customer with this name");
        }

        customer.name = name;
        customer.email = email;

        await customerRepository.save(customer);
        
        return customer;
    }

}

export default UpdateCostumerService;