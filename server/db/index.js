/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
const connection = require('./connection')
const { generateHash } = require('authenticare/server')

// AUTH user queries

function createUser(user, db = connection) {
  const newUser = { ...user }
  return generateHash(newUser.password).then((passwordHash) => {
    newUser.hash = passwordHash
    delete newUser.password
    return db('users').insert({
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      hash: newUser.hash,
    })
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
  return addListing
}

const getOneListing = async (id, db = connection) => {
  const oneListing = await db('listings')
    .join('users', 'users.id', 'listings.users_id')
    .where('listingId', id)
    .select('*', 'listings.id as listingId')
    .first()
  return oneListing
}

const deleteListing = async (id, db = connection) => {
  const deleteListing = await db('listings').where('id', id).del()
  return deleteListing
}

const editListing = async (editedListing, id, db = connection) => {
  const listings = await db('listings').where('id', id).update(editedListing)
  return listings
}

const getUserListings = async (userId, db = connection) => {
  const userListings = await db('listings')
    .join('users', 'users.id', 'listings.users_id')
    .where('users.id', userId)
    .select()
  return userListings
}

// COMMENTS queries

const getListingComments = async (id, db = connection) => {
  const listingComments = await db('comments')
    .where('listing_id', id)
    .join('listings', 'listings.id', 'comments.listing_id')
    .join('users', 'users.id', 'comments.users_id')
    .select('comment', 'date_created AS dateCreated', 'username', 'name')
  return listingComments
}

const addComment = async (latestComment, db = connection) => {
  const newComment = await db('comments').insert({
    comment: latestComment.comment,
    listing_id: latestComment.listingId,
    users_id: latestComment.userId,
  })
  return newComment
}

const updateComment = (updatedComment, db = connection) => {
  return db('comments').where('id', updatedComment.id).update({
    comment: updatedComment.comment,
  })
}

const deleteComment = (id, db = connection) => {
  return db('comments').where('id', id).del()
}

module.exports = {
  editListing,
  createUser,
  userExists,
  getUserByUsername,
  getAllListings,
  getUserListings,
  addListing,
  getOneListing,
  deleteListing,
  getListingComments,
  addComment,
  updateComment,
  deleteComment,
}
