import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
class User
{
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column('string')
    name : string

    @Column('string')
    email : string

    @Column('string')
    password : string

    @Column('string')
    avatar : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date
}

export default User;