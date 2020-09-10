
exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    {
      recipe_name: "Star-nosed Mole",
      steps: 'steps'
    },
  ]);
};
