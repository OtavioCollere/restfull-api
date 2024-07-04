import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddCostumerIdToProcedures1720095984999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'procedures',
            new TableColumn({
                name : "costumer_id",
                type : 'uuid',
                isNullable : true
            })
        )

        await queryRunner.createForeignKey(
            'procedures', 
            new TableForeignKey({
                name : 'CostumerProcedures',
                columnNames : ['costumer_id'],
                referencedTableName : 'costumers',
                referencedColumnNames : ['id'],
                onDelete : 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('anamneses' ,'CostumerProcedures');
        await queryRunner.dropColumn('anamneses', 'costumer_id')
    }

}
