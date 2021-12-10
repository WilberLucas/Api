
exports.up = function(knex) {

    return knex.schema.createTable("Produtos", (table) => {
        table.increments().primary();
        table.string("nome");
        table.string("imagem");
        table.integer("lojas_id").references("lojas.id")
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("produtos")
};
