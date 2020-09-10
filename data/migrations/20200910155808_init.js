
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.string('recipe_name').notNullable()
            tbl.text('steps').notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient_name').notNullable()

        })
        .createTable('recipes_ingredients', tbl => {
            tbl.increments()

            //foreign key 
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')//links the id of questions table
                .inTable('recipes')//links question table
                .onDelete('RESTRICT')//parent needs to be deleted before this field is delete
                .onUpdate('CASCADE')//if this field is update it, it's updated it on the whole database where it appears
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')//shorthand
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.float ('require_quantity').notNullable()

        })
}

// drop tables in the opposite way they where added
exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipes')
}
