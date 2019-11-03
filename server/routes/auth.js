const express = require('express')
const { getAdminByEmail, updateAdmin } = require('../db/admin')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.post('/signin', signInAdmin, token.issue)

function signInAdmin (req, res, next) {
  getAdminByEmail(req.body.email)
    .then(user => {
      return user
      // || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch((err) => {
      res.status(400).send({
        errorType: err.message
        // 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

router.put('/update-admin', token.decode, (req, res) => {
  const { name, email, currentPassword, newPassword } = req.body
  updateAdmin(name, email, currentPassword, newPassword)
    .then(() => {
      res.status(202).end()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
