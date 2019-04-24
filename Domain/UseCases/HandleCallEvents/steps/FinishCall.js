const dependencies = {
  StateClient: require('../../../../Infra/clients/StateClient')
}

module.exports = async function FinishCall ({ callId }, injection) {
  const { StateClient } = Object.assign({}, dependencies, injection)

  return StateClient.removeItem(callId)
}
