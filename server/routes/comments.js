const express = require('express')
const db = require('../db/index')
const router = express.Router()

// GET routes
router.get('/comments', async (req, res) => {
  try {
    const allComments = await db.getAllComments()
    res.json(allComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

<<<<<<< HEAD
router.get('/comments/:id', async (req, res) => {
  try {
    const id = req.params.id
    const listingComments = await db.getListingComments(id)
    console.log(listingComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
||||||| 14512d3
// router.post('/listing', (req, res) => {
//   const newListing = req.body
//   db.addListing(newListing)
//     .then((idArr) => res.sendStatus(201))
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })

// // not sure if req.params() is the right function to use here
// router.get('/listing/:id', (req, res) => {
//   const id = req.params.id
//   db.getOneListing(id)
//     .then((food) => res.json(food))
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })
=======
router.get('/comments/:id', async (req, res) => {
  try {
    const id = req.params.id
    const listingComments = await db.getListingComments(id)
    res.json(listingComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST routes
router.post('/comments', async (req, res) => {
  try {
    const newComment = req.body
    console.log(newComment)
    const latestComment = await db.addComment(newComment)
    // res.json(listingComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
>>>>>>> a8a2ab4934bc288cbb7cd8facf6d41546ad3dc8b

module.exports = router
