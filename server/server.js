const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const listingRoutes = require('./routes/listing')
const commentsRoutes = require('./routes/comments')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/listings', listingRoutes)
server.use('/api/v1/comments', commentsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
