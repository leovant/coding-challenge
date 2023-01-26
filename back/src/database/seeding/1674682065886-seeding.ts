import { MigrationInterface, QueryRunner } from "typeorm"

import news from './news.json';

export class seeding1674682065886 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = 'id, title, description, body, imageUrl, thumbnail, url';

    for (let i = 0; i < news.length; i++) {
      const { id, title, description, body, image, url } = news[i];
      const { url: imageUrl, thumbnail } = image;
      const sql = `INSERT INTO news (${columns}) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      await queryRunner.query(sql, [id, title, description, body, imageUrl, thumbnail, url]);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM news');
  }
}
