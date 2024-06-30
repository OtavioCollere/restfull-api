import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
class User
{

    @Column()
    id : string

    @Column()
    name : string

    @Column()
    email : string

    @Column()
    password : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

}

export default User