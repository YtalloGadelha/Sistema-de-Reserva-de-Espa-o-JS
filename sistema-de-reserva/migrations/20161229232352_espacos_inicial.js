exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("Espacos", (table) => {
  	table.increments("id_espaco");
  	table.string("nome_espaco").notNullable().unique();
  	table.string("descricao_espaco").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("Espacos");
};