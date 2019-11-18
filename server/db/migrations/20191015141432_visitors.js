exports.up = (knex, Promise) => {
  return knex.schema.createTable('visitors', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('reason')
    table.string('sign_in_time')
    table.string('sign_out_time')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('visitors')
}
