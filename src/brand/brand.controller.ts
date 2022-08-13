import { Body, Controller, Post } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
    constructor( private readonly brandService : BrandService ) {}

    @Post('new')
    async createCategory(@Body() { name } : { name : string}) {
        return await this.brandService.createBrand(name);
    }
}
