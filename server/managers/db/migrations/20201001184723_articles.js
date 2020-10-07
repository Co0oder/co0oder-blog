
exports.up = (knex)  =>{
    return knex.schema.createTable('articles', table => {
        table.increments('id').unsigned().primary();
        table.text('content');
        table.string('title');
        table.integer('admin_id');
        table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    })
};

exports.down = (knex) => {
  return knex.schema.dropTable('articles');
};
