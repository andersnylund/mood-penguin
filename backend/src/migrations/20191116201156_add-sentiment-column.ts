import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.alterTable('mood', (table: Knex.TableBuilder) => {
    table.float('sentiment');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.alterTable('mood', (table: Knex.TableBuilder) => {
    table.dropColumn('sentiment');
  });
}
