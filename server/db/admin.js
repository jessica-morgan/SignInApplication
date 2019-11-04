const connection = require('./connection')
const hash = require('../auth/hash')

module.exports = {
  getAdminById,
  getAdminByEmail,
  updateAdmin
}

function getAdminById (id, conn) {
  const db = conn || connection
  return db('admin')
    .where('id', id)
    .select()
    .first()
}

function getAdminByEmail (email, conn) {
  const db = conn || connection
  return db('admin')
    .where('email', email)
    .select()
    .first()
}

function updateAdmin (name, email, currentPassword, newPassword, db = connection) {
  return getAdminByEmail(email, db)
    .then(user => {
      if (!user || !hash.verify(user.hash, currentPassword)) {
        return Promise.reject(new Error('name password match not found'))
      }
      return Promise.resolve(user)
    })
    .then(user => {
      const newPasswordHash = hash.generate(newPassword)
      if (email !== user.email) Promise.reject(new Error('name and ID mismatch'))
      return db('admin')
        .update({ name, email, hash: newPasswordHash })
        .where('id', user.id)
    })
}
