const express = require('express')
const { send } = require('express/lib/response')
const db = require('../db/index')
const router = express.Router()

router.get('/listings', (req, res) => {
  db.getAllListings()
    .then((foods) => res.json(foods))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/listing', (req, res) => {
  const newListing = req.body
  db.addListing(newListing)
    .then((idArr) => res.sendStatus(201))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.delete('/listing/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteListing(id)
    .then((idArr) => res.sendStatus(201))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/listing/:id', (req, res) => {
  const id = Number(req.params.id)
  const editedListing = req.body
  db.editListing(editedListing[0], id)
    .then((idArr) => res.sendStatus(201))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/listing/:id', (req, res) => {
  const id = req.params.id
  db.getOneListing(id)
    .then((food) => res.json(food))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
