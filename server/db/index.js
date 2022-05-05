const connection = require('./connection')
const { generateHash } = require('authenticare/server')

// AUTH user queries
function createUser(user, db = connection) {
  const newUser = { ...user }
  return generateHash(newUser.password).then((passwordHash) => {
    newUser.hash = passwordHash
    delete newUser.password
    return db('users').insert(newUser)
  })
}

function userExists(username, db = connection) {
  return db('users')
    .where('username', username)
    .then((users) => users.length > 0)
}

function getUserByUsername(username, db = connection) {
  return db('users').where('username', username).first()
}

// LISTINGS queries
const getAllListings = async (db = connection) => {
  const allListings = await db('listings')
    .join('users', 'users.id', 'listings.users_id')
    .select(
      'title',
      'image',
      'description',
      'location',
      'category',
      'expiry_date AS expiryDate',
      'username',
      'name',
      'hash',
      'email',
      'phone',
      'users.id AS userId',
      'listings.id AS listingId'
    )
  return allListings
}

const addListing = async (newListing, db = connection) => {
  const addListing = await db('listings').insert(newListing, 'id')
}

const getOneListing = async (id, db = connection) => {
  const oneListing = await db('listings')
    .join('users', 'users.id', 'listings.users_id')
    .where('listingId', id)
    .select('*', 'listings.id as listingId')
    .first()
  return oneListing
}

const getUserListings = async (userId, db = connection) => {
  const userListings = await db('listings')
    .join('users', 'users.id', 'listings.users_id')
    .where('users.id', userId)
    .select()
  return userListings
}

module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getAllListings,
  getUserListings,
  addListing,
  getOneListing,
}
