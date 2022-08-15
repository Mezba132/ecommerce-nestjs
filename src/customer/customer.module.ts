import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Customer } from 'src/entity/customer.entity';
import { OrderModule } from 'src/order/order.module';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports : [TypeOrmModule.forFeature([Customer]), AuthModule, OrderModule],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
