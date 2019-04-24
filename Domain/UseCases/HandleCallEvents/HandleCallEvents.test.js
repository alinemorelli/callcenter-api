describe('HandleCallEvents', function () {
  const { mock } = require('sinon')
  const { expect } = require('chai')
  const { random } = require('faker')
  const HandleCallEvents = require('./HandleCallEvents')

  let dependencies = {}
  const callId = random.uuid().toString()

  const onGoingCall = {
    registeredCustomer: true
  }

  it('handle new call', async function () {
    const expectedResult = true
    const callData = {
      type: 'call.new',
      call_id: callId
    }
    const updatedCall = Object.assign({}, onGoingCall, callData)

    dependencies.StateClient = {
      getItem: mock()
        .once()
        .withExactArgs(callId)
        .resolves(onGoingCall),
      setItem: mock()
        .once()
        .withExactArgs(callId, updatedCall)
        .resolves(expectedResult)
    }

    dependencies.StartCall = mock()
      .once()
      .withExactArgs(callData)
      .resolves(expectedResult)

    dependencies.DelegateCall = mock().never()

    dependencies.FinishCall = mock().never()

    const callEventResult = await HandleCallEvents(callData, dependencies)

    expect(callEventResult).to.equal(expectedResult)
  })

  it('handle standby call', async function () {
    const expectedResult = true
    const callData = {
      type: 'call.standby',
      call_id: callId
    }
    const updatedCall = Object.assign({}, onGoingCall, callData)

    dependencies.StateClient = {
      getItem: mock()
        .once()
        .withExactArgs(callId)
        .resolves(onGoingCall),
      setItem: mock()
        .once()
        .withExactArgs(callId, updatedCall)
        .resolves(expectedResult)
    }

    dependencies.StartCall = mock().never()

    dependencies.DelegateCall = mock()
      .once()
      .withExactArgs({ callId })
      .resolves(expectedResult)

    dependencies.FinishCall = mock().never()

    const callEventResult = await HandleCallEvents(callData, dependencies)

    expect(callEventResult).to.equal(expectedResult)
  })

  it('handle finish call', async function () {
    const expectedResult = true
    const callData = {
      type: 'call.finished',
      call_id: callId
    }
    const updatedCall = Object.assign({}, onGoingCall, callData)

    dependencies.StateClient = {
      getItem: mock()
        .once()
        .withExactArgs(callId)
        .resolves(onGoingCall),
      setItem: mock()
        .once()
        .withExactArgs(callId, updatedCall)
        .resolves(expectedResult)
    }

    dependencies.StartCall = mock().never()

    dependencies.DelegateCall = mock().never()

    dependencies.FinishCall = mock()
      .once()
      .withExactArgs({ callId })
      .resolves(expectedResult)

    const callEventResult = await HandleCallEvents(callData, dependencies)

    expect(callEventResult).to.equal(expectedResult)
  })
})
