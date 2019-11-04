exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('visitors').del()
    .then(function () {
      // Inserts seed entries
      return knex('visitors').insert([
        { id: 1, name: 'Bob', email: 'bob@bob.com', reason: 'maintenance', sign_in_time: '2019-10-16T02:13:27.012Z', sign_out_time: null },
        { id: 2, name: 'Sue', email: 'sue@sue.com', reason: 'interview', sign_in_time: '2019-10-16T02:15:02.765Z', sign_out_time: null }
      ])
    })
}
