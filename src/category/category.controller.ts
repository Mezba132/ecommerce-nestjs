import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor( private readonly categoryService : CategoryService ) {}

    @Post('new')
    async createCategory(@Body() { name } : { name : string}) {
        return await this.categoryService.createCategory(name);
    }

    @Get()
    async getCategory() {
        return await this.categoryService.getCategory()
    }

    @Get(':id')
    async getCategoryById(@Param('id') id : number) {
        return await this.categoryService.getCategoryById(id)
    }
}
