import { ICostumer } from "@modules/costumers/domain/models/ICostumer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("costumers")
class Costumer implements ICostumer
{
    
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    cpf: string

    @Column()
    sexo: string

    @Column()
    profissao: string

    @Column()
    endereco: string

    @Column()
    telefone: string

    @Column()
    telefoneEmergencia: string

    @Column()
    dataNasc: Date

    @Column()
    tratamentoAnterior: string

    @Column()
    toxinaBotulinica: string

    @Column()
    toxinaBotulinica_regiao: string

    @Column()
    toxinaBotulinica_produto: string

    @Column()
    fioSustentacao: string

    @Column()
    fioSustentacao_regiao: string

    @Column()
    fioSustentacao_produto: string

    @Column()
    liftCirurgico: string

    @Column()
    liftCirurgico_regiao: string

    @Column()
    liftCirurgico_produto: string

    @Column()
    peelingQuimico: string

    @Column()
    peelingQuimico_regiao: string

    @Column()
    peelingQuimico_produto: string

    @Column()
    laser: string

    @Column()
    laser_regiao: string

    @Column()
    laser_produto: string

    @Column()
    usaMedicamento: string

    @Column()
    usaMedicamento_qual: string

    @Column()
    trabalhoExpostoCalor: string

    @Column()
    alergia: string

    @Column()
    gestante_lactante: string

    @Column()
    intoleranciaLactose: string

    @Column()
    diabetes: string

    @Column()
    roacutam: string

    @Column()
    obs: string

    @Column()
    tratamento: string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

}

export default Costumer;