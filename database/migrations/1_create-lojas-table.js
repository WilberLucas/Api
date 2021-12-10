
exports.up = function(knex) {

    return knex.schema.createTable("lojas", (table) => {
        table.increments().primary();
        table.string("nome");
        table.timestamps(true, true);
    })
};

exports.down = function(knex) { 
  return knex.schema.dropTable("lojas")
};
