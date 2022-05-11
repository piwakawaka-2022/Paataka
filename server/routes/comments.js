/* eslint-disable no-unused-vars */
const express = require('express')

const db = require('../db/index')
const router = express.Router()

// GET routes

router.get('/', async (req, res) => {
  try {
    const allComments = await db.getAllComments()
    res.json(allComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log('we are in routes', id)
    const listingComments = await db.getListingComments(id)
    console.log('we are in post db func', listingComments)
    res.json(listingComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST routes

router.post('/', async (req, res) => {
  try {
    const newComment = req.body
    const latestComment = await db.addComment(newComment)
    res.json(latestComment)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// PATCH routes

router.patch('/', async (req, res) => {
  try {
    const editedComment = req.body
    const editComment = await db.updateComment(editedComment)
    res.json(editedComment)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE routes

router.delete('/', async (req, res) => {
  try {
    const id = req.params.commentId
    const deleteComment = await db.deleteComment(id)
    res.sendStatus(200)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
