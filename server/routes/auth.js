const express = require('express')
const { getAdminByEmail, getAdminById, updateAdmin } = require('../db/admin')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.post('/admin/signin', signInAdmin, token.issue)

function signInAdmin (req, res, next) {
  const email = 'carolyn@devacademy.co.nz'
  const password = 'welcome'
  getAdminByEmail(email)
    .then(user => {
      console.log('getEmail: ', user)
      return user
      // || invalidCredentials(res)
    })
    // .then(user => {
    //   console.log('then, email: ', user)
    //   return user && hash.verify(user.hash, password)
    // })
    .then(isValid => {
      console.log('isValid: ', isValid)
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

router.get('/admin/:id', token.decode, (req, res) => {
  const id = req.params.id
  getAdminById(id)
    .then((admin) => {
      console.log(admin)
      res.send(admin)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/update-admin', token.decode, (req, res) => {
  const { email, currentPassword, newPassword } = req.body
  updateAdmin(email, currentPassword, newPassword)
    .then(() => {
      res.status(202).end()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
