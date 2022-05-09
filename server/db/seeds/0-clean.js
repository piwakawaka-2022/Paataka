exports.seed = async (knex) => {
  const empty = (table) => knex(table).del()
  await empty('comments')
  await empty('listings')
  await empty('users')
  
  
}
