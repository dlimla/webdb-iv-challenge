
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Apple_Pan', dish_id:2},
        {recipe_name: 'BurgerKing', dish_id:2},
        {recipe_name: 'mom_origional', dish_id:1}
      ]);
    });
};
