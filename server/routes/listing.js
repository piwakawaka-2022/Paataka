const express = require('express')

const db = require('../db/index')
const router = express.Router()

// GET ROUTES

router.get('/', (req, res) => {
  db.getAllListings()
    .then((foods) => res.json(foods))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getOneListing(id)
    .then((food) => res.json(food))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// POST ROUTES

router.post('/', (req, res) => {
  const newListing = req.body
  db.addListing(newListing)
    .then((idArr) => res.sendStatus(201))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/delete', (req, res) => {
  const id = req.body.listingId
  db.deleteListing(id)
    .then((idArr) => res.sendStatus(201))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
