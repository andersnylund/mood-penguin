import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('mood', (table: Knex.TableBuilder) => {
    table
      .uuid('id')
      .unique()
      .notNullable();
    table.index('id');
    table.integer('happiness');
    table.text('description');
    table.dateTime('timestamp');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('mood');
}
