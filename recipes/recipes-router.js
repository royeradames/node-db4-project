const express = require('express')
const Recipes = require('./recipes-module')
const router = express.Router()

router.get('/', (req,res) =>{
    Recipes.getRecipes()
        .then(recipes => {
            
            if (recipes.length) {
                res.status(200).json(recipes)
            } else {
                res.status(400).json({recipes: 'There is no recipes.'})
            }
        })
        .catch(error => {
            res.status(500).json({error: error.message})

        })
})

module.exports = router