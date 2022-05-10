exports.seed = async (knex) => {
  await knex('listings')
    .del()
    .insert([
      {
        id: 1,
        title: 'Box of red apples',
        image:
          'http://www.johnharveyphoto.com/SaltSpringAppleFestival/RedApplesInBoxLg.jpg',
        description:
          'Delicious box of red gala apples, way too many for us to eat!',
        location: 'Newtown, Wellington',
        category: 'Fruit',
        users_id: 1
      },
      {
        id: 2,
        title: 'Box of cabbages',
        image:
          'http://nashsorganicproduce.com/farm-shares/wp-content/uploads/2015/07/Napa-cabbage-horz.jpg',
        description: 'Heaps of cabbages in great condition!',
        location: 'Mt Cook, Wellington',
        category: 'Vegetables',
        users_id: 1
      },
      {
        id: 3,
        title: 'Freshly cooked loaf of bread',
        image:
          'https://www.rd.com/wp-content/uploads/2020/02/sliced-homemade-bread-shutterstock_418622407.jpg',
        description: 'Fresh loaf of bread for pickup',
        location: 'Kilbirnie, Wellington',
        category: 'Bread',
        users_id: 1
      }
    ])
}
