
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lojas').del()
    .then(function () {
      // Inserts seed entries
      return knex('lojas').insert([
        {nome: "Epic gomes" },
        {nome: "gog" },
        {nome: "Steam" }, 
      ]);
    });
};
