import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrationInit1725917104004 implements MigrationInterface {
  name = 'MigrationInit1725917104004';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "hasProblems" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );

    for (let i = 0; i < 1000000; i++) {
      const firstName = `firstName${i}`;
      const lastName = `lastName${i}`;
      const age = Math.floor(Math.random() * 80);
      const gender = Math.random() < 0.5 ? 'Male' : 'Female';
      const hasProblems = Math.random() < 0.3;

      const insertQuery = `INSERT INTO "user" ("firstName", "lastName", "age", "gender", "hasProblems") VALUES ('${firstName}', '${lastName}', ${age}, '${gender}', ${hasProblems})`;
      await queryRunner.query(insertQuery);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
