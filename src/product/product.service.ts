import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepository : Repository<Product>) {}

    async createProduct(body : ProductDto, image : any) {

        let { name, price, category, brand } = body;

        let data = {
            name,
            price,
            image,
            category : category,
            brand : brand
        }

        console.log(data);

        let newProduct = this.productRepository.create(data);
        return await this.productRepository.save(newProduct);
    }

    async getAllProducts() {
        return await this.productRepository.find()
    }

   async getProductById(id : number) {
        return await this.productRepository.findOne({ where : { id : id } });
   }

}
