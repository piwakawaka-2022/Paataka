exports.seed = async (knex) => {
  const empty = (table) => knex(table).del()
  await empty('users')
  await empty('listings')
  await empty('comments')
}
