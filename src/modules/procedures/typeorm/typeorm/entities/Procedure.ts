import Costumer from '@modules/customers/typeorm/entities/Costumer';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('procedures')
class Procedure
{
    @PrimaryGeneratedColumn('uuid')
    id : string

    @ManyToOne( type => Costumer, procedure => procedure.procedures )
    @JoinColumn({name : 'costumer_id'})
    costumer : Costumer

    @Column()
    name : string

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