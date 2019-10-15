const path = require('path')
const express = require('express')
const server = express()
const visitors = require('./routes/visitors')
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/visitors', visitors)

module.exports = server
