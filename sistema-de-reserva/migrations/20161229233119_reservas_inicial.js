
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExist("Reservas", (table) => {
		table.increments("id_reserva");
		table.integer("id_pessoa").notNullable();
		table.foreign("id_pessoa").references("Pessoas.id_pessoa");
		table.integer("id_espaco").notNullable();
		table.foreign("id_espaco").references("Espacos.id_espaco");
		table.date("data_reserva_inicio").notNullable();
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("Reservas");
};