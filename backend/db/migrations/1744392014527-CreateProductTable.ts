import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1744392014527 implements MigrationInterface {
  name = 'CreateProductTable1744392014527';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "sku" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "category" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_5a4ed9b7abeb3f0de4d17e6f717" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
