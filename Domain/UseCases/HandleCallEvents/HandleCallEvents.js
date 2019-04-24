const dependencies = {
  StateClient: require('../../../Infra/clients/StateClient'),
  StartCall: require('./steps/StartCall'),
  DelegateCall: require('./steps/DelegateCall'),
  FinishCall: require('./steps/FinishCall')
}

module.exports = async function HandleCallEvents (callData, injection) {
  const { StateClient, StartCall, DelegateCall, FinishCall } = Object.assign({}, dependencies, injection)
  const { type, call_id: callId } = callData
  const onGoingCall = await StateClient.getItem(callId)

  if (type === 'call.new') return StartCall(callData)

  if (type === 'call.standby') DelegateCall({ callId })

  if (type === 'call.finished') return FinishCall({ callId })

  const updatedCall = Object.assign({}, onGoingCall, callData)
  return StateClient.setItem(callId, updatedCall)
}
