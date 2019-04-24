const dependencies = {
  storage: require('node-persist')
}

const initNodePersist = function (injection) {
  const { storage } = Object.assign({}, dependencies, injection)
  return storage.init({
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8'
  })
}

const StateClient = {
  getItem (key, injection) {
    const { storage } = Object.assign({}, dependencies, injection)
    initNodePersist()
    return storage.getItem(key)
  },

  getAll (injection) {
    const { storage } = Object.assign({}, dependencies, injection)
    initNodePersist()
    return storage.values()
  },

  setItem (key, value, injection) {
    const { storage } = Object.assign({}, dependencies, injection)
    initNodePersist()
    return storage.setItem(key, value)
  },

  removeItem (key, injection) {
    const { storage } = Object.assign({}, dependencies, injection)
    initNodePersist()
    return storage.removeItem(key)
  }
}

module.exports = StateClient
