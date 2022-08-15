import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column({ type : "varchar", length : 50, nullable : false })
    name : string

    @Column({ type : "varchar", length : 50, unique : true, nullable : false })
    email : string

    @Column({ type : "varchar", length : 100, nullable : false })
    password : string

    @Column({ type : "varchar", length : 50, unique : true, nullable : false })
    phone : string

    @OneToMany(() => Customer, customer => customer.user)
    customer : Customer[]

    @Column({ type : "date" })
    created_at : Date

    @Column({ type : "date"})
    updated_at : Date
}