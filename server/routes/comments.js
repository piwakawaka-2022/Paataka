const express = require('express')
const db = require('../db/index')
const router = express.Router()

router.get('/comments', async (req, res) => {
  try {
    const allComments = await db.getAllComments()
    res.json(allComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/comments/:id', async (req, res) => {
  try {
    const id = req.params.id
    const listingComments = await db.getListingComments(id)
    res.json(listingComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
