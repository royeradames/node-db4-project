

exports.seed = function (knex, Promise) {
  return knex('recipes_ingredients').insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      require_quantity: 2,
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: 0.5,
    },
  ]);
};
