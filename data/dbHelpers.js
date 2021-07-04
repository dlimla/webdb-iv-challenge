const knex = require('knex');
const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development)

module.exports = {

    findDishes: () => {
        return db('dishes');
    },

    findRecipes: () => {
        return db('recipes')
            .innerJoin('dishes', 'dish_id', 'dishes.id')
            .innerJoin(
                'ingredientsRecipe', 
                'recipe_id', 
                'ingredientsRecipe.recipe_id')
            .innerJoin(
                'ingredients',
                'ingredient_id',
                'ingredients.id'
            )
    },

    findIngredients: () => {
        return db('ingredients');
    },

    findSingleDish: (id) => {
        return db('dishes')
        .join('recipes', 'dishes.id', "=", 'recipes.dish_id')
        .select('dishes.id', 'dishes.dish_name', {recipe: "recipes.recipe_name"})
        .where({"dishes.id": id})
    },

    addDish: (dish) => {
        return db('dishes')
        .insert(dish)
    }


}