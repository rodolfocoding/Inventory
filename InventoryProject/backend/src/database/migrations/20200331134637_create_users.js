exports.up = function(knex) {
    return knex.schema.createTable("users", function(table) {
      table.string("id").primary();
      table.string("company").notNullable();
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("email").notNullable();
      table.string("area").notNullable();
      table.boolean("ativo").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("users");
  };
  