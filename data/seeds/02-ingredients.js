

exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    // species_id must match valid species
    { ingredient_name: "eggs"},
  ]);
};
