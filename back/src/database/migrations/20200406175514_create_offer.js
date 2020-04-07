
exports.up = function(knex) {
    return knex.schema.createTable('offer', function(table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('neighborhood').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

        table.string('locator_id').notNullable();
        table.foreign('locator_id').references('id').inTable('locator');
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('offer');

};
