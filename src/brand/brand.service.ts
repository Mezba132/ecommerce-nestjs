import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from 'src/entity/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
    
    constructor(@InjectRepository(Brand) private brandRepository : Repository<Brand>) {}

    async createBrand(name : string) {
        let newBrand = this.brandRepository.create({ name });
        return await this.brandRepository.save(newBrand);
    }
}