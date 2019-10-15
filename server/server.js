const path = require('path')
const express = require('express')
const visitors = require('./routes/visitors')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/visitors', visitors)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
