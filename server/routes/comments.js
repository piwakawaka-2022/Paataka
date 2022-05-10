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
    const listingComments = await db.getListingComments(id)
    res.json(listingComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST routes
router.post('/', async (req, res) => {
  try {
    const newComment = req.body
    console.log(newComment)
    const latestComment = await db.addComment(newComment)
    // res.json(listingComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.patch('/', async (req, res) => {
  try {
    const editedComment = req.body
    const editComment = await db.updateComment(editedComment)
    res.json(editedComment)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

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
