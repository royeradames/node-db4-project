const db = require('./data/db-config.js');

module.imports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}
//should return a list of all recipes in the database.
function getRecipes() {
    /*
        select *
        from recipes
        ;
    */
    return db('recipes')
}
// should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    /*
        select i.ingredient_name, ri.quantity
        from ingredients as i
        join recipes_ingredients as ri
            on i.id = ri.ingredient_id
        where recipe_id = 1
        ;
    */
    db('ingredients as i')
    .join('recipes_ingredients as ri', 'on i.id', 'ri.ingredient_id')
    .where('recipe_id', recipe_id)
}
// should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    /*
        select *
        from steps
        where recipe_id = 1
        order by [order]
        ;
    */
   return db('steps')
    .where('recipe_id', recipe_id)
    .orderBy('[order]')

}
