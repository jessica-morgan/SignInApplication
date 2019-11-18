const connection = require('./connection')

const hash = require('../auth/hash')

function getAdminById (id, db = connection) {
  return db('admin')
    .where('id', id)
    .select()
    .first()
}

function getAdminByEmail (email, db = connection) {
  return db('admin')
    .where('email', email)
    .first()
}

function updateAdmin (email, currentPassword, newPassword, db = connection) {
  return getAdminByEmail(email, db)
    .then(user => {
      if (!user || !hash.verify(user.hash, currentPassword)) {
        return Promise.reject(new Error('name password match not found'))
      }
      return Promise.resolve(user)
    })
    .then(user => {
      console.log('db_verify: ', user, newPassword)
      const newPasswordHash = hash.generate(newPassword)
      if (email !== user.email) Promise.reject(new Error('email and ID mismatch'))
      return db('admin')
        .where('id', user.id)
        .update({ email, hash: newPasswordHash })
        // update just gives hash a null value
    })
}

module.exports = {
  getAdminById,
  getAdminByEmail,
  updateAdmin
}
