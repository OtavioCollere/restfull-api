import { ICostumer } from "@modules/costumers/domain/models/ICostumer";
import { IProcedure } from "@modules/procedures/domain/models/IProcedure";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("procedures")
class Procedure implements IProcedure
{
    
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name: string

    @Column()
    regiao : string

    @Column()
    produto : string

    @Column()
    preco : number

    @Column()
    dataProced : Date

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

}

export default Procedure;