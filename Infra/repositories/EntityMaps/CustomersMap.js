const Customer = require('../../../Domain/Entities/Customer')
const { Mapper } = require('speck-sequelize-repository')
const createMapFromDictionary = require('../../helpers/createMapFromDictionary')

const map = createMapFromDictionary({
  'phone': 'their_number',
  'id': 'id'
})

module.exports = new Mapper(Customer, map)
