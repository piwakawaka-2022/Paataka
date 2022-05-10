const { generateHash } = require('authenticare/server')

const replacePasswordWithHash = async (user) => {
  const userCopy = { ...user }
  userCopy.hash = await generateHash(user.password)
  delete userCopy.password
  return userCopy
}

const fakeUserData = [
  {
    id: 1,
    username: 'adminUser',
    password: 'password',
    name: 'adminUser',
    email: 'luke_conker@hotmail.com',
    phone: '+642040214728',
  },
  {
    id: 2,
    username: 'guestUser',
    password: 'password',
    name: 'Guest User',
    email: 'unknown',
    phone: 'unknown',
  },
]

exports.seed = async (knex) => {
  await knex('users')
    .del()
    .then(() => fakeUserData.map(replacePasswordWithHash))
    .then((fakeUserPromises) => Promise.all(fakeUserPromises))
    .then((users) => knex('users').insert(users))
}
