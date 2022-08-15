import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from '../entity/order.entity';

@Injectable()
export class OrderService {

  constructor( @InjectRepository(Order) private customerRepository : Repository<Order>, ) {}

  create(customerInfo : any) {

      let data = {
        customer : customerInfo,
        created_at : new Date(),
        trackId : 1246
      }
      

      let order = this.customerRepository.create(data);
      return this.customerRepository.save(order);

  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
