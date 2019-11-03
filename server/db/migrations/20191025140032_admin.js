exports.up = (knex, Promise) => {
  return knex.schema.createTable('admin', (table) => {
    table.string('name')
    table.string('email')
    table.string('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('admin')
}
