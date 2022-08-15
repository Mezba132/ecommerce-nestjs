import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { User } from "./user.entity";

@Entity('customer')
export class Customer {
    @PrimaryGeneratedColumn()
    id : number

    @Column({ type : "varchar", length : 75, nullable : false })
    name : string

    @Column({ type : "varchar", length : 50, nullable : false })
    email : string

    @Column({ type : "varchar", length : 50, nullable : false })
    address : string

    @Column({ type : "varchar", length : 50, nullable : false })
    city : string

    @Column({ type : "varchar", length : 50, nullable : true })
    phone : string

    @ManyToOne(() => User, user => user.customer, { nullable : true })
    user : User

    @OneToMany( () => Order, order => order.customer) 
    orders : Order[]

    @Column({ type : "date" })
    created_at : Date

    @Column({ type : "date"})
    updated_at : Date
}