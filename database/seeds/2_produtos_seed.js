
exports.seed = function(knex) {
  return knex('produtos').del()
    .then(function () {
      
    });
};
