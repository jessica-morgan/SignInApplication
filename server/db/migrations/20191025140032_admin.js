exports.up = (knex, Promise) => {
  return knex.schema.createTable('admin', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email').unique()
    table.string('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('admin')
}
