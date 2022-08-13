import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

    constructor(@InjectRepository(Category) private catRepository : Repository<Category>) {}

    async createCategory(name : string) {
        let newCat = this.catRepository.create({ name });
        return await this.catRepository.save(newCat);
    }

}
