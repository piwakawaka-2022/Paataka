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
    username: 'admin',
    password: 'Krang',
    first_name: 'Admin',
    last_name: 'Istrator',
    hourly_wage: 300
  },
]

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => fakeUserData.map(replacePasswordWithHash))
    .then(fakeUserPromises => Promise.all(fakeUserPromises))
    .then(users => knex('users').insert(users))
}
