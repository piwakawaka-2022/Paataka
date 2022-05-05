exports.up = async (knex) => {
  await knex.schema.createTable('listings', table => {
    table.increments('id')
    table.string('title')
    table.string('image')
    table.string('description')
    table.string('location')
    table.string('category')
    table.timestamp('expiry_date')
    table.integer('users_id').references('users.id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('listings')
}
