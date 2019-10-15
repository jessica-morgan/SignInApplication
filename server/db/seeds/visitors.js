exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('visitors').del()
    .then(function () {
      // Inserts seed entries
      return knex('visitors').insert([
        { name: 'Bob', email: 'bob@bob.com', reason: 'maintenance', sign_in_time: 'Tue Oct 15 2019 14:27:05 GMT+1300 (New Zealand Daylight Time)', sign_out_time: 'Tue Oct 15 2019 13:15:05 GMT+1300 (New Zealand Daylight Time)' },
        { name: 'Sue', email: 'sue@sue.com', reason: 'interview', sign_in_time: 'Tue Oct 15 2019 10:10:05 GMT+1300 (New Zealand Daylight Time)', sign_out_time: 'Tue Oct 15 2019 11:16:05 GMT+1300 (New Zealand Daylight Time)' }
      ])
    })
}
