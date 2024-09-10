import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: String(process.env.POSTGRES_HOST),
  port: Number(process.env.POSTGRES_PORT),
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  database: String(process.env.POSTGRES_DB),
  cache: false,
  synchronize: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, 'postgres', 'migrations', '*-migration-*.js')],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
