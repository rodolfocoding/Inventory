
exports.up = function(knex) {
    return knex.schema.createTable('items', function(table){
        table.increments();
  
        table.string('inventory_id').notNullable();
        table.string('nameItem').notNullable();
        table.boolean('ativo').notNullable();
        
        table
        .foreign('inventory_id')
        .references('id')
        .inTable('inventorys');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('items');
  };
  