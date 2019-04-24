describe('FinishCall', function () {
  const { mock } = require('sinon')
  const { expect } = require('chai')
  const { random } = require('faker')
  const FinishCall = require('./FinishCall')

  let dependencies = {}
  const callId = random.uuid().toString()

  it('remove call from storage', async function () {
    const expectedResult = true

    dependencies.StateClient = {
      removeItem: mock()
        .once()
        .withExactArgs(callId)
        .resolves(expectedResult)
    }

    const finishCallResult = await FinishCall({ callId }, dependencies)

    expect(finishCallResult).to.equal(expectedResult)
  })
})
