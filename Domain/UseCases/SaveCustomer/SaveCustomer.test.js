describe('SaveCustomer', function () {
  const { mock } = require('sinon')
  const { expect } = require('chai')
  const { phone, random } = require('faker')
  const Customer = require('../../Entities/Customer')

  const SaveCustomer = require('./SaveCustomer')
  let dependencies = {}
  const customerNumber = phone.phoneNumber()
  const uuid = random.uuid().toString()

  it('save customer based on phone number', async function () {
    const newCustomer = new Customer({
      phone: customerNumber,
      id: uuid
    })

    dependencies.uuid = () => uuid

    dependencies.CustomerRepository = {
      createCustomer: mock()
        .once()
        .withExactArgs(newCustomer)
        .resolves(newCustomer)
    }

    const savedCustomer = await SaveCustomer({ customerNumber }, dependencies)

    expect(savedCustomer).to.equal(newCustomer)
  })
})
