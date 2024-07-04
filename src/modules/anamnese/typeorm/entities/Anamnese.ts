import Costumer from '@modules/customers/typeorm/entities/Costumer';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('anamneses')
class Anamnese
{
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    tratamentoAnterior : string

    // // // // // // // //

    @Column()
    toxinaBotulinica : string

    @Column()
    toxinaBotulinica_regiao : string

    @Column()
    toxinaBotulinica_produto : string

    // // // // // // // //

    @Column()
    fioSustentacao : string

    @Column()
    fioSustentacao_regiao : string

    @Column()
    fioSustentacao_produto : string

    // // // // // // // //

    @Column()
    liftCirurgico : string

    @Column()
    liftCirurgico_regiao : string

    @Column()
    liftCirurgico_produto : string

    // // // // // // // //

    @Column()
    peelingQuimico : string

    @Column()
    peelingQuimico_regiao : string

    @Column()
    peelingQuimico_produto : string

    // // // // // // // //

    @Column()
    laser : string

    @Column()
    laser_regiao : string

    @Column()
    laser_produto : string

    // // // // // // // //

    @Column()
    usaMedicamento : string

    @Column()
    usaMedicamento_qual : string

    // // // // // // // //

    @Column()
    trabalhoExpostoCalor : string

    @Column()
    alergia : string

    @Column()
    gestante_lactante : string
    
    @Column()
    intoleranciaLactose : string

    @Column()
    diabetes : string

    @Column()
    roacutam : string

    @Column()
    obs : string

    @Column()
    tratamento : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

    @OneToOne(type => Costumer, costumer => costumer.anamnese)
    @JoinColumn({ name: 'costumer_id' })
    costumer: Costumer;

}

export default Anamnese;