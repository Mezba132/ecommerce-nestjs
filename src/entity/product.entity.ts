import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../entity/category.entity'
import { Brand } from './brand.entity';

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn()
    id : number

    @Column({ type : 'varchar', length : 100, nullable : false })
    name : string

    @Column({ type : 'varchar', length : 100, nullable : false })
    price : number

    @Column({ type : 'json', nullable : true })
    image : JSON

    @ManyToOne(() => Category, cat => cat.product)
    category : Category

    @ManyToOne(() => Brand, brand => brand.product)
    brand : Brand

}