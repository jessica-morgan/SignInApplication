exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        { name: 'Carolyn', email: 'carolyn@devacademy.co.nz', hash: 'welcome' }
      ])
    })
}
