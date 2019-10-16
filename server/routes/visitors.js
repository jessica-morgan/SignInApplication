const express = require('express')
const db = require('../db/db')
const router = express.Router()

// gets all visitors
router.get('/allVisitors', (req, res) => {
  db.getAllVisitors()
    .then(allVisitors => {
      res.json(allVisitors)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.get('/visitor/:email', (req, res) => {
  const email = req.params.email
  db.getVisitorByEmail(email)
    .then(visitor => {
      res.json(visitor)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.get('/unsignedOut', (req, res) => {
  db.getAllUnsignedOutVisitors()
    .then(visitor => {
      res.json(visitor)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/signIn', (req, res) => {
  const visitor = {
    name: req.body.name,
    email: req.body.email,
    reason: req.body.reason,
    sign_in_time: req.body.sign_in_time
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
  const timeStamp = req.body.sign_out_time
  db.visitorSignOut(email, timeStamp)
    .then(signedOut => {
      res.json(signedOut)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

module.exports = router
