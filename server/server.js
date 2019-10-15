const path = require('path')
const express = require('express')
const server = express()

const authRoutes = require('./auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/auth', authRoutes)

module.exports = server
