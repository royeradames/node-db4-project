
exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    {
      recipe_name: "Scramble eggs",
      steps: '1. get eggs. 2. scramble the eggs'
    },
  ]);
};
