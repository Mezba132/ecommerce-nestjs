import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('customer')
export class Customer {
    @PrimaryGeneratedColumn()
    id : number

    @Column({ type : "varchar", length : 75, nullable : false })
    name : string

    @Column({ type : "varchar", length : 50, unique : true, nullable : false })
    email : string

    @Column({ type : "varchar", length : 50, nullable : false })
    address : string

    @Column({ type : "varchar", length : 50, nullable : false })
    city : string

    @Column({ type : "varchar", length : 50, unique : true, nullable : true })
    phone : string

    @OneToOne(() => User, { nullable : true })
    @JoinColumn()
    user : User

    @Column({ type : "date" })
    created_at : Date

    @Column({ type : "date"})
    updated_at : Date
}