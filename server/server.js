const path = require('path')
const express = require('express')
const server = express()
// const router = require('./routes')
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

// server.use('/', router)

module.exports = server
