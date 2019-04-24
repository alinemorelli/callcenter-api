const { Entity, validatorAdapter } = require('speck-entity')
const Joi = require('joi')
const adapter = validatorAdapter('joi', require('joi'))

class Customer extends Entity { }

Customer.SCHEMA = {
  id: adapter(Joi.string().guid()),
  phone: adapter(Joi.string())
}

module.exports = Customer
