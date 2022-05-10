/* eslint-disable comma-dangle */
const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const { userExists, getUserByUsername, createUser } = require('../db/index')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser,
})

module.exports = router
