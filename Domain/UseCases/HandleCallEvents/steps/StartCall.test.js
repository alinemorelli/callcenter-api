describe('StartCall', function () {
  const { mock } = require('sinon')
  const { expect } = require('chai')
  const { phone, random } = require('faker')
  const Customer = require('../../../Entities/Customer')

  const StartCall = require('./StartCall')
  let dependencies = {}

  const callData = {
    their_number: phone.phoneNumber(),
    call_id: random.uuid().toString()

  }

  const customer = new Customer(callData)

  it('set call if user is registered', async function () {
    const expectedResult = true
    const customerData = Object.assign({}, callData, { registeredCustomer: true })

    dependencies.CustomerRepository = {
      findByPhone: mock()
        .once()
        .withExactArgs(callData.their_number)
        .resolves(customer)
    }

    dependencies.SaveCustomer = mock().never()

    dependencies.StateClient = {
      setItem: mock()
        .once()
        .withExactArgs(callData.call_id, customerData)
        .resolves(expectedResult)
    }

    const savedCustomer = await StartCall(callData, dependencies)

    expect(savedCustomer).to.equal(expectedResult)
  })

  it('set call and save data if user is not registered', async function () {
    const expectedResult = true
    const customerData = Object.assign({}, callData, { registeredCustomer: false })

    dependencies.CustomerRepository = {
      findByPhone: mock()
        .once()
        .withExactArgs(callData.their_number)
        .resolves()
    }

    dependencies.SaveCustomer = mock()
      .once()
      .withExactArgs({ customerNumber: callData.their_number })
      .resolves()

    dependencies.StateClient = {
      setItem: mock()
        .once()
        .withExactArgs(callData.call_id, customerData)
        .resolves(expectedResult)
    }

    const savedCustomer = await StartCall(callData, dependencies)

    expect(savedCustomer).to.equal(expectedResult)
  })
})
