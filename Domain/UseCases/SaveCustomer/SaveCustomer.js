const Customer = require('../../Entities/Customer')
const dependencies = {
  uuid: require('uuid').v4,
  CustomerRepository: require('../../../Infra/repositories/CustomersRepository')
}

module.exports = async function SaveCustomer ({ customerNumber }, injection) {
  const { CustomerRepository, uuid } = Object.assign({}, dependencies, injection)

  const newCustomer = new Customer({
    phone: customerNumber,
    id: uuid()
  })

  return CustomerRepository.createCustomer(newCustomer)
}
