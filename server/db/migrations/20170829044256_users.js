exports.up = async (knex) => {
  await knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('hash')
    table.string('name')
    table.string('email')
    table.string('phone')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable('users')
}
