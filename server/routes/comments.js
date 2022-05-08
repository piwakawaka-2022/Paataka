const express = require('express')
const db = require('../db/index')
const router = express.Router()

router.get('/comments', async (req, res) => {
  try {
    console.log('hitting route!')
    const allComments = await db.getAllComments()
    res.json(allComments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

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

module.exports = router