import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
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

    @Column({ type : 'varchar', length : 150, nullable : true })
    image : string

    @OneToOne(() => Category)
    @JoinColumn()
    category : Category

    @OneToOne(() => Brand)
    @JoinColumn()
    brand : Brand

}