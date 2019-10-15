const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

// gets all visitors info
router.get('/', (req, res) => {
  db.getAllVisitors()
    .then(allVisitors => {
      res.json(allVisitors)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.get('/visitor', (req, res) => {
  db.getVisitorByEmail()
    .then(visitor => {
      res.json(visitor)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/signIn', (req, res) => {
  const visitor = {
    name: req.params.name,
    email: req.body.email,
    reason: req.body.reason,
    sign_in_time: req.body.time
  }
  db.newVisitor(visitor)
    .then(visitorInfo => {
      res.json(visitorInfo)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/signOut', (req, res) => {
  const email = req.body.email
  const timeStamp = req.body.time
  db.visitorSignOut(email, timeStamp)
    .then(signedOut => {
      res.json(signedOut)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})
