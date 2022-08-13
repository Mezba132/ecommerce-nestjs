import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type : "date" })
    created_at : Date

    @Column({ type : "date"})
    updated_at : Date
}