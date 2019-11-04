const hash = require('../../auth/hash')

exports.seed = (knex) => {
  return Promise.all([
    hash.generate('welcome'),
    hash.generate('academy')
  ]).then(([caroHash, adminHash]) => {
    return knex('admin').del()
      .then(function () {
      // Inserts seed entries
        return knex('admin').insert([
          { id: 1, name: 'Carolyn', email: 'carolyn@devacademy.co.nz', hash: caroHash },
          { id: 2, name: 'admin', email: 'admin@admin.com', hash: adminHash }
        ])
      })
  })
}
