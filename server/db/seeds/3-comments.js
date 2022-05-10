exports.seed = async (knex) => {
  await knex('comments')
    .del()
    .insert([
      { id: 1, comment: 'OMG these apples made a smashing crumble. Thanks heaps you neighbourly legends', listing_id: 1, users_id: 1 },
      { id: 2, comment: 'Cabages yes please great time', listing_id: 2, users_id: 1 },
      { id: 3, comment: 'This bread changed my life.', listing_id: 3, users_id: 1 }
    ])
}
