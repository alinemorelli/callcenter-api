const { expect } = require('chai')

const Customer = require('./models').Customer
const CustomersMap = require('./EntityMaps/CustomersMap')
const CustomersRepository = require('./CustomersRepository')

describe('CustomerRepository', () => {
  it('exports a BaseRepository for CustomerRepository', () => {
    expect(CustomersRepository.sequelizeModel).to.equal(Customer)
    expect(CustomersRepository.mapper).to.equal(CustomersMap)
  })
})
