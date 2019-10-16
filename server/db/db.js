const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

// gets all visitors
function getAllVisitors (db = connection) {
  return db('visitors')
    .select()
}

// gets a particular user by email
function getVisitorByEmail (email, db = connection) {
  return db('visitors')
    .where('visitors.email', email)
    .select()
}

// get all unsigned out visitors
function getAllUnsignedOutVisitors (db = connection) {
  return db('visitors')
    .whereNull('visitors.sign_out_time')
    .select()
}

// posts new visitor information
function newVisitor (visitor, db = connection) {
  return db('visitors')
    .insert({
      name: visitor.name,
      email: visitor.email,
      reason: visitor.reason,
      sign_in_time: visitor.sign_in_time
    })
}

// posts timestamp to sign_out_time for a visitor
function visitorSignOut (email, timeStamp, db = connection) {
  return db('visitors')
    .where('visitors.email', email)
    .update({
      sign_out_time: timeStamp
    })
}

module.exports = {
  getAllVisitors,
  getVisitorByEmail,
  newVisitor,
  visitorSignOut,
  getAllUnsignedOutVisitors
}
