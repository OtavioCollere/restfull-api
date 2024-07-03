import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddCostumerIdToAnamnese1720029498051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'anamneses',
            new TableColumn({
                name : 'costumer_id',
                type : 'uuid',
                isNullable : true
            })
        )

        await queryRunner.createForeignKey(
            'anamneses',
            new TableForeignKey({
                name : 'AnamneseCostumer',
                columnNames : ['costumer_id'],
                referencedTableName : 'costumers',
                referencedColumnNames : ['id'],
                onDelete : 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('anamneses','AnamneseCostumer');
        await queryRunner.dropColumn('anamneses','costumer_id');   
    }

}
