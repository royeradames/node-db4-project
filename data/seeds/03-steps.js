

exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    { step: "In a medium bowl, use a fork to whisk together eggs and yogurt. ", recipe_id: 1, order: 1},
    { step: "In a medium nonstick pan over medium-low heat, melt butter. When butter is completely melted, add eggs. When eggs start to set, use a rubber spatula to gently move the cooked egg around in the pan. When the eggs are almost cooked to your liking, fold in chives and plate. Season with salt and pepper.  ", recipe_id: 1, order: 2 },
  ]);
};
