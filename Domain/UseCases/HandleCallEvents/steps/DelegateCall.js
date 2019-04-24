const TeravozConfig = require('../../../../Infra/config/teravoz')
const dependencies = {
  StateClient: require('../../../../Infra/clients/StateClient'),
  TeravozClient: require('../../../../Infra/clients/TeravozClient')
}

module.exports = async function DelegateCall ({ callId }, injection) {
  const { StateClient, TeravozClient } = Object.assign({}, dependencies, injection)
  const onGoingCall = await StateClient.getItem(callId)

  return TeravozClient.post({
    'type': 'delegate',
    'call_id': callId,
    'destination': onGoingCall.registeredCustomer ? TeravozConfig.returningContactBranch : TeravozConfig.firstContactBranch
  })
}
