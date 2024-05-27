import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1716832739030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'products',
                columns : [
                    {
                        name : 'id',
                        type : 'uid',
                        isPrimary : true,
                        generationStrategy : 'uuid',
                        default : 'uuid_generate_v4',
                    },
                    {
                        name : 'name', 
                        type : 'varchar'
                    },
                    {
                        name : 'price',
                        type : 'decimal',
                        precision : 10,
                        scale : 2,
                    },
                    {
                        name : 'quantity', 
                        type : 'int'
                    },
                    {
                        name : 'created_at',
                        type : 'timestamp with timezone',
                        default : 'now()'
                    },
                    {
                        name : 'updated_at',
                        type : 'timezone with timestamp',
                        default : 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }
}
