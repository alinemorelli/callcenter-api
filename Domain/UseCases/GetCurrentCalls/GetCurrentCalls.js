const dependencies = {
  stateClient: require('../../../Infra/clients/StateClient')
}

module.exports = async function GetCurrentCalls (injection) {
  const { stateClient } = Object.assign({}, dependencies, injection)

  return stateClient.getAll()
}
