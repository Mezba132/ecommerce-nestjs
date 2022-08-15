import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn()
    id : number

    @ManyToOne( () => Customer, customer => customer.orders )
    customer : Customer

    @Column('timestamp')
    created_at : Date

    @Column()
    trackId : number

}