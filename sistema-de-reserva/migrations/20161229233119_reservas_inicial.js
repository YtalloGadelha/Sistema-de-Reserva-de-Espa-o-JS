
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists("Reservas", (table) => {
		table.increments("id_reserva");
		table.string("nome_pessoa").notNullable();
		table.string("nome_espaco").notNullable();
		//table.integer('id_pessoa').notNullable();
		//table.foreign('id_pessoa').references('Pessoas.id_pessoa');
		//table.integer('id_espaco').notNullable();
		//table.foreign('id_espaco').references('Espacos.id_espaco');
		table.datetime("data_inicio_reserva").notNullable();
		table.datetime("data_termino_reserva").notNullable();
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("Reservas");
};