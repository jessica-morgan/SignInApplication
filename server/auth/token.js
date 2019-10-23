const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const db = require('../db/admin')
// const jwtTestSecret = require('../../test/server/routes/jwt-test-secret.js')

module.exports = {
  issue,
  decode,
  createToken // exported for testing
}

function issue (req, res) {
  db.getAdmin(req.body.name)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    name: user.name
  }, secret, {
    expiresIn: '1d'
  })
}

function getSecret (req, payload, done) {
  const secret = process.env.JWT_SECRET || jwtTestSecret
  if (secret === jwtTestSecret) {
    // console.warn('ATTENTION: Using the JWT Test secret')
  }
  done(null, secret)
}
