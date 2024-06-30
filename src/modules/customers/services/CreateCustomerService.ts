import { getCustomRepository } from "typeorm";
import AppError from "@shared/http/errors/AppError";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";


interface IRequest
{
    name : string;
    email : string;
}

class CreateCustomerService 
{

    public async execute( {name, email } : IRequest ) : Promise<Customer | undefined>
    {
        const customerRepository = getCustomRepository(CustomerRepository);
        const emailExists = await customerRepository.findByEmail(email);

        if ( emailExists )
        {
            throw new AppError("Email already exists");
        }

        const costumer = customerRepository.create({
            name,
            email
        })

        await customerRepository.save(costumer);
        
        return costumer;
    }

}

export default CreateCustomerService;