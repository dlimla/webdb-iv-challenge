
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredients_name')
            .notNullable()
            .unique();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');  
};
