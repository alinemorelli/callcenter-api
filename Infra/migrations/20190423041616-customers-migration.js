'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const columns = {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      phone: {
        type: Sequelize.STRING
      }
    }
    return queryInterface.createTable('Customers', columns, require('./config/defaultTableConfig'))
  },
  down: (queryInterface) => queryInterface.dropTable('Customers')
}
