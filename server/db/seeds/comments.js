exports.seed = async (knex) => {
  await knex('comments')
    .del()
    .insert([
      { id: 1, title: 'Such delicisous apples! Thanks!', comment: 'OMG these apples made a smashing crumble. Thanks heaps you neighbourly legends', listing_id: 1, users_id: 1 },
      { id: 2, title: 'Those cabbages were yum', comment: 'Cabages yes please great time', listing_id: 2, users_id: 1 },
      { id: 3, title: 'Best fresh bread EVA', comment: 'This bread changed my life.', listing_id: 3, users_id: 1 }
    ])
}
