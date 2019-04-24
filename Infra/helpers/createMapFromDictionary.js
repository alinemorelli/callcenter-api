module.exports = function createMapFromDictionary (dictionary) {
  return {
    toEntity: dictionary,
    toDatabase: Object.keys(dictionary)
      .reduce((accumulator, key) => Object.assign(accumulator, { [dictionary[key]]: key }), {})
  }
}
