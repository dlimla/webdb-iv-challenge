
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'peanut_butter'},
        {ingredient_name: 'jelly'},
        {ingredient_name: 'slice_of_bread'},
        {ingredient_name: 'bun'},
        {ingredient_name: 'patty'},
        {ingredient_name: 'tomato'},
        {ingredient_name: 'pickle'},
        {ingredient_name: 'bacon'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'lettuce'}
      ]);
    });
};
