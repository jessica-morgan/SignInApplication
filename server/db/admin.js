// const connection = require('./connection') Will need to update this when db is added
const hash = require('../auth/hash')

module.exports = {
  getAdmin,
  updateAdmin
}

function getAdmin (name, db = connection) {
  return db('admin')
    .select()
    .where('name', name)
    .first()
}

function updateAdmin (name, email, currentPassword, newPassword, db = connection) {
  return getAdmin(name, db)
    .then(user => {
      if (!user || !hash.verify(user.hash, currentPassword)) {
        return Promise.reject(new Error('Username password match not found'))
      }
      return Promise.resolve(user)
    })
    .then(user => {
      const newPasswordHash = hash.generate(newPassword)
      if (email !== user.email) Promise.reject(new Error('Username and ID mismatch'))
      return db('users')
        .update({ name, email, hash: newPasswordHash })
        .where('id', user.id)
    })
}
