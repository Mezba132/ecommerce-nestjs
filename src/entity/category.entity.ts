import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './product.entity'

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    id : number

    @Column({ type : 'varchar', length : 100, nullable : false })
    name : string

    @OneToMany(() => Product, product => product.category)
    product : Product[]
}