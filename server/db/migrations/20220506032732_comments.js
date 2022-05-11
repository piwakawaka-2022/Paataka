exports.up = async (knex) => {
  await knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.string('comment')
    table.date('date_created').defaultTo(new Date())
    table.integer('users_id').references('users.id')
    table.integer('listing_id').references('listings.id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('comments')
}
