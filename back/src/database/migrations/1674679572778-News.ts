import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class News1674679572778 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'news',
      columns: [
        {name: 'id', type: 'varchar', isPrimary: true},
        {name: 'title', type: 'text'},
        {name: 'description', type: 'text'},
        {name: 'body', type: 'text'},
        {name: 'imageUrl', type: 'varchar'},
        {name: 'thumbnail', type: 'varchar'},
        {name: 'url', type: 'varchar'},
      ],
    })

    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({ name: 'news' });

    await queryRunner.dropTable(table, true);
  }
}
