const teravozConfig = require('../config/teravoz')

const dependencies = {
  axios: require('axios'),
  DELEGATE_URL: `${teravozConfig.baseUrl}/actions`
}

const TeravozClient = {
  post ({ data }, injection) {
    const { axios, DELEGATE_URL } = Object.assign({}, dependencies, injection)

    const headers = {
      'content-type': 'application/json',
      Authorization: `Basic ${teravozConfig.authorization}`
    }

    // TODO: deal with success and error when is possible to integrate with Teravoz API
    return axios.post(DELEGATE_URL, data, headers)
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }
}

module.exports = TeravozClient
