import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnamnese1720025741083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'anamneses',
                columns : [
                    {
                        name : 'id', 
                        type : 'uuid',
                        isPrimary : true,
                        generationStrategy : 'uuid',
                        default : 'uuid_generate_v4()',
                    },
                    {
                        // tratamento estético anterior
                        name : 'tratamentoAnterior',
                        type : 'varchar'
                    }, 
                    {
                        name : 'toxinaBotulinica',
                        type : 'varchar'
                    }, 
                    {
                        name : 'toxinaBotulinica_regiao',
                        type : 'varchar'
                    }, 
                    {
                        name : 'toxinaBotulinica_produto',
                        type : 'varchar'
                    }, 
                    // // // // // // // // // // //
                    {
                        name : 'fioSustentacao',
                        type : 'varchar'
                    }, 
                    {
                        name : 'fioSustentacao_regiao',
                        type : 'varchar'
                    }, 
                    {
                        name : 'fioSustentacao_produto',
                        type : 'varchar'
                    }, 
                    // // // // // // // // // // //
                    {
                        name : 'liftCirurgico',
                        type : 'varchar'
                    }, 
                    {
                        name : 'liftCirurgico_regiao',
                        type : 'varchar'
                    }, 
                    {
                        name : 'liftCirurgico_produto',
                        type : 'varchar'
                    }, 
                    // // // // // // // // // // //
                    {
                        name : 'peelingQuimico',
                        type : 'varchar'
                    }, 
                    {
                        name : 'peelingQuimico_regiao',
                        type : 'varchar'
                    }, 
                    {
                        name : 'peelingQuimico_produto',
                        type : 'varchar'
                    }, 
                    // // // // // // // // // // //
                    {
                        name : 'laser',
                        type : 'varchar'
                    }, 
                    {
                        name : 'laser_regiao',
                        type : 'varchar'
                    }, 
                    {
                        name : 'laser_produto',
                        type : 'varchar'
                    }, 
                    // // // // // // // // // // //
                    {
                        name : 'usaMedicamento',
                        type : 'varchar'
                    }, 
                    {
                        name : 'usaMedicamento_qual',
                        type : 'varchar'
                    }, 
                    // // // // // // // // // // // //
                    {
                        name : 'trabalhoExpostoCalor',
                        type : 'varchar'
                    }, 
                    {
                        name : 'alergia',
                        type : 'varchar'
                    }, 
                    {
                        name : 'gestante_lactante',
                        type : 'varchar'
                    }, 
                    {
                        name : 'intoleranciaLactose',
                        type : 'varchar'
                    }, 
                    {
                        name : 'diabetes', 
                        type : 'varchar'
                    },
                    {
                        name : 'roacutam',
                        type : 'varchar'
                    },
                    {
                        name : 'obs',
                        type : 'text'
                    },
                    {
                        name : 'tratamento',
                        type : 'text'
                    },
                    {
                        name : 'created_at',
                        type : 'timestamp with time zone',
                        default : 'now()'
                    },
                    {
                        name : 'updated_at',
                        type : 'timestamp with time zone',
                        default : 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('anamneses')
    }

}
