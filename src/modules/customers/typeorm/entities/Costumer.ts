import Anamnese from '@modules/anamnese/typeorm/entities/Anamnese';
import Procedure from '@modules/procedures/typeorm/typeorm/entities/Procedure';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('costumers')
class Costumer
{
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name : string

    @OneToOne(type => Anamnese, anamnese => anamnese.costumer)
    anamnese: Anamnese;

    @OneToMany(type =>  Procedure, procedure => procedure.costumer)
    procedures : Procedure[]

    @Column()
    email : string
    
    @Column()
    cpf : string

    @Column()
    sexo : string

    @Column()
    profissao : string

    @Column()
    endereco : string

    @Column()
    telefone : string

    @Column()
    telefoneEmergencia : string

    @Column()
    dataNasc : Date

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date
}

export default Costumer;