const db = require('../data/db-config.js');

module.exports = {
    getIngredientForRecipes
}

// all recipes in the system that utilize a single ingredient
function getIngredientForRecipes(ingredient_id) {
    /*
        select r.recipe_name
        from recipes_ingredients as ri
        join recipes as r
            on r.id = ri.recipe_id
        where ri.ingredient_id = 1
        ;
    */
    return db('recipes_ingredients as ri')
        .where('ri.ingredient_id', ingredient_id)
        .join('recipes as r', 'r.id', 'ri.recipe_id')
        .select('r.recipe_name')
}