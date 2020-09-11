const express = require('express')
const Recipes = require('./recipes-module')
const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {

            if (recipes.length) {
                res.status(200).json(recipes)
            } else {
                res.status(400).json({ recipes: 'There is no recipes.' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })

        })
})
router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(shoppingList => {
            console.log(shoppingList)
            if (shoppingList.length) {
                res.status(200).json(shoppingList)
            } else {
                res.status(400).json({ error: 'Cannot find that recipe.' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })

        })
})
router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(intructions => {
            intructions
            if (intructions.length) {
                res.status(200).json(instructions)
            } else {
                res.status(400).json({ error: 'Cannot find that recipe instructions.' })

            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })

        })
})

module.exports = router