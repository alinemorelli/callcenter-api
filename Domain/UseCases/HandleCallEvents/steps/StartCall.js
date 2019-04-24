const dependencies = {
  StateClient: require('../../../../Infra/clients/StateClient'),
  CustomerRepository: require('../../../../Infra/repositories/CustomersRepository'),
  SaveCustomer: require('../../SaveCustomer')
}

module.exports = async function StartCall (callData, injection) {
  const { StateClient, CustomerRepository, SaveCustomer } = Object.assign({}, dependencies, injection)
  const { call_id: callId, their_number: theirNumber } = callData

  const customer = await CustomerRepository.findByPhone(theirNumber)
  const customerData = Object.assign({}, callData, { registeredCustomer: !!customer })

  if (!customer) SaveCustomer({ customerNumber: theirNumber })

  return StateClient.setItem(callId, customerData)
}
