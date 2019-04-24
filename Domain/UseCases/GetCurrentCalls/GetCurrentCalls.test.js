describe('GetCurrentCalls', function () {
  const { mock } = require('sinon')
  const { expect } = require('chai')
  const { phone, random, date } = require('faker')
  const GetCurrentCalls = require('./GetCurrentCalls')

  const currentCall = {
    'key': random.uuid(),
    'value': {
      'type': 'call.new',
      'call_id': random.uuid(),
      'code': random.number(),
      'direction': 'inbound',
      'our_number': phone.phoneNumber(),
      'their_number': phone.phoneNumber(),
      'their_number_type': 'mobile',
      'timestamp': date.past(),
      'registeredCustomer': false
    }
  }

  let dependencies = {}

  it('return all current calls', async function () {
    dependencies.stateClient = {
      getAll: mock()
        .withExactArgs()
        .once()
        .resolves(currentCall)
    }

    const curretnCalls = await GetCurrentCalls(dependencies)

    expect(curretnCalls).to.equal(currentCall)
  })
})
