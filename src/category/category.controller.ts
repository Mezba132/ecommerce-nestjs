import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor( private readonly categoryService : CategoryService ) {}

    @Post('new')
    async createCategory(@Body() { name } : { name : string}) {
        return await this.categoryService.createCategory(name);
    }
}
