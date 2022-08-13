import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService : ProductService) {}

    @Post('new') 
    async createProduct(@Body() body : ProductDto) {
        return await this.productService.createProduct(body);
    }

    @Get()
    async getProduct() {
        return await this.productService.getProductDetails()
    }
}
