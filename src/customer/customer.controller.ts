import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerDto } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService : CustomerService) {}

    @Post('new')
    async createCustomer(@Body() newCustomer : CustomerDto) {
        return this.customerService.creatCustomer(newCustomer);
    }

    @Get()
    async getCustomers() {
        return this.customerService.getCustomerDetails()
    }
}
