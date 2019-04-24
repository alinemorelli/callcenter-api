const { Repository } = require('speck-sequelize-repository')

const dependencies = {
  CustomersMap: require('./EntityMaps/CustomersMap'),
  Customer: require('./models').Customer
}

const CustomerRepository = {
  async findByPhone (phone, injection) {
    const { Customer, CustomersMap } = Object.assign({}, dependencies, injection)

    const customer = await Customer
      .findAll({
        where: { phone },
        raw: true
      })

    return CustomersMap.toEntity(customer)[0]
  },

  async createCustomer (newCustomer, injection) {
    const { Customer, CustomersMap } = Object.assign({}, dependencies, injection)
    const customer = await Customer
      .create(newCustomer)

    return CustomersMap.toEntity(customer)
  }
}

module.exports = Repository.for(dependencies.Customer, dependencies.CustomersMap, CustomerRepository)
