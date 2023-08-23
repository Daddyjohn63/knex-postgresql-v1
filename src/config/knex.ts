import 'dotenv/config';
import knex from 'knex';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const db = knex({
  client: 'postgresql',
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
  },
  pool: {
    min: 2,
    max: 10
  }
});

export const onDatabaseConnect = async () => db.raw('SELECT 1');

export default db;
