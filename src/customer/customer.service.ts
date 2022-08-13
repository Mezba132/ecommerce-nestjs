import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Customer } from 'src/entity/customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from './customer.dto';
const moment = require('moment');

@Injectable()
export class CustomerService {

    constructor( 
        @InjectRepository(Customer) private customerRepository : Repository<Customer>,
        private readonly authService : AuthService
     ) {}

    async creatCustomer(newCustomer : CustomerDto) {
        try {

            let { name, email, city, address, phone } = newCustomer;

            let existUser = await this.authService.findOne(email)

            if(existUser) {
                let data = {
                    name,
                    city,
                    email,
                    address,
                    phone,
                    user : existUser,
                    created_at : moment().format(),
                    updated_at : moment().format()
                }

                const user =  this.customerRepository.create(data);
                return await this.customerRepository.save(user);
                
            }
        }
        catch {
            throw new UnauthorizedException('Failed to Register New Customer')
        }

    }

    async getCustomerDetails() {
        return await this.customerRepository.find({
            relations: {
                user : true,
            },
        })
    }
    
}
