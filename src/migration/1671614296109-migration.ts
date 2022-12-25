import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671614296109 implements MigrationInterface {
  name = "migration1671614296109";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "creationDate" TIMESTAMP DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "age" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "age" SET NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "creationDate"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "lastName" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "firstName" character varying NOT NULL`
    );
  }
}
