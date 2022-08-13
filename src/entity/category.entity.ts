import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    id : number

    @Column({ type : 'varchar', length : 100, nullable : false })
    name : string

}