exports.up = function(knex) {
  return knex.schema.createTable("inventorys", function(table) {
    table.string("id").primary();
    table.string("company_id").notNullable();
    table.string("name").notNullable();
    table.boolean("ativo").notNullable();

    table
      .foreign("company_id")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("inventorys");
};
