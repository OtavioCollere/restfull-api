import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
class Customer
{

    @Column()
    id : string

    @Column()
    name : string

    @Column()
    email : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

}

export default Customer