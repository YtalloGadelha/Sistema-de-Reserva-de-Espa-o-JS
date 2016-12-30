exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExist("Pessoas", (table) => {
  	table.increments("id_pessoa");
  	table.string("nome_pessoa").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("Pessoas");
};