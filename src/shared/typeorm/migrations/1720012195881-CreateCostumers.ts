import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCostumers1720012195881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'costumers',
                columns : [ //
                    {
                        name : 'id', 
                        type : 'uuid',
                        isPrimary : true,
                        generationStrategy : 'uuid',
                        default : 'uuid_generate_v4()',
                    },
                    {
                        name : 'name',
                        type : 'varchar'
                    }, 
                    {
                        name : 'email',
                        type : 'varchar'
                    },
                    {
                        name : 'cpf',
                        type : 'varchar'
                    },
                    {
                        name : 'sexo',
                        type : 'varchar'
                    },
                    {
                        name : 'profissao',
                        type : 'varchar',
                        default : 'null'
                    },
                    {
                        name : 'endereco',
                        type : 'varchar'
                    },
                    {
                        name : 'telefone',
                        type : 'varchar'
                    },
                    {
                        name : 'telefoneEmergencia',
                        type : 'varchar'
                    },
                    {
                        name : 'dataNasc',
                        type : 'timestamp with time zone',
                        default : 'now()'
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
        await queryRunner.dropTable('costumers');
    }

}
