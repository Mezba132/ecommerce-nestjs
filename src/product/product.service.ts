import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepository : Repository<Product>) {}

    async createProduct(body : ProductDto) {

        let { name, price, image, category, brand } = body;

        let data = {
            name,
            price,
            image,
            category : category,
            brand : brand
        }
        

        let newProduct = this.productRepository.create(data);
        return await this.productRepository.save(newProduct);
    }

    async getProductDetails() {
        return await this.productRepository.find({
            relations: {
                category : true,
                brand : true
            },
        })
    }
}
