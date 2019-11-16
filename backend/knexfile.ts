import './src/env';

const configuration = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'src/migrations'
  },
  timezone: 'UTC'
};

export = configuration;
