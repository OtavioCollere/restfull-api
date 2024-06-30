import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
class Product
{

    @Column()
    id : string

    @Column()
    name : string

    @Column()
    price : number

    @Column()
    quantity : number

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

}

export default Product