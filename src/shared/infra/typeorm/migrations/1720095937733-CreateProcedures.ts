import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProcedures1720095937733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'procedures',
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
                        name : 'regiao', 
                        type : 'varchar'
                    },
                    {
                        name : 'produto',
                        type : 'varchar'
                    },
                    {
                        name : 'preco',
                        type : 'decimal'
                    },
                    {
                        name : 'dataProced',
                        type : "timestamp with time zone",
                        default : "now()"
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
        await queryRunner.dropTable('procedures');
    }

}
