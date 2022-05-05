exports.seed = async (knex) => {
  await knex('listings')
    .del()
    .insert([
      { id: 1, title: 'Box of red apples', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Findian-red-apples-20075190112.html&psig=AOvVaw0HzjvFATCvpCWnj7-afaZm&ust=1651803192343000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDv_8ukx_cCFQAAAAAdAAAAABAD', description: 'Delicious box of red gala apples, way too many for us to eat!', location: 'Newtown, Wellington', category: 'Fruit', users_id: 1 },
      { id: 2, title: 'Box of cabbages', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cookist.com%2F12-ways-to-select-and-store-cabbage-efficiently%2F&psig=AOvVaw1begQZXR1TNlf9TBYb_q-M&ust=1651803468093000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPi8ttKlx_cCFQAAAAAdAAAAABAI', description: 'Heaps of cabbages in great condition!', location: 'Mt Cook, Wellington', category: 'Vegetables', users_id: 1 },
      { id: 3, title: 'Freshly cooked loaf of bread', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbutterwithasideofbread.com%2Fhomemade-bread%2F&psig=AOvVaw1QdbCjEfRGdPMrQcvezR35&ust=1651803517537000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjsqOGlx_cCFQAAAAAdAAAAABAF', description: 'Fresh loaf of bread for pickup', location: 'Kilbirnie, Wellington', category: 'Bread', users_id: 1 }

    ])
}
