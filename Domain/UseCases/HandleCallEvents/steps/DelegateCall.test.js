describe('DelegateCall', function () {
  const { mock } = require('sinon')
  const { expect } = require('chai')
  const { random } = require('faker')
  const TeravozConfig = require('../../../../Infra/config/teravoz')
  const DelegateCall = require('./DelegateCall')

  let dependencies = {}
  const callId = random.uuid().toString()

  it('delegate returning client call', async function () {
    const expectedResult = true
    const onGoingCall = {
      registeredCustomer: true
    }

    dependencies.StateClient = {
      getItem: mock()
        .once()
        .withExactArgs(callId)
        .resolves(onGoingCall)
    }

    dependencies.TeravozClient = {
      post: mock()
        .once()
        .withExactArgs({
          'type': 'delegate',
          'call_id': callId,
          'destination': TeravozConfig.returningContactBranch
        })
        .resolves(expectedResult)
    }

    const delegateCallResponse = await DelegateCall({ callId }, dependencies)

    expect(delegateCallResponse).to.equal(expectedResult)
  })

  it('delegate first contact client call', async function () {
    const expectedResult = true
    const onGoingCall = {
      registeredCustomer: false
    }

    dependencies.StateClient = {
      getItem: mock()
        .once()
        .withExactArgs(callId)
        .resolves(onGoingCall)
    }

    dependencies.TeravozClient = {
      post: mock()
        .once()
        .withExactArgs({
          'type': 'delegate',
          'call_id': callId,
          'destination': TeravozConfig.firstContactBranch
        })
        .resolves(expectedResult)
    }

    const delegateCallResponse = await DelegateCall({ callId }, dependencies)

    expect(delegateCallResponse).to.equal(expectedResult)
  })
})
