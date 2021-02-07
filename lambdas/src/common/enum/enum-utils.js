function values() {
  const enumValues = []

  Object.keys(this).forEach((attribute) => {
    if (/^[A-Z]+$/.test(attribute)) {
      enumValues.push(attribute)
    }
  })

  return enumValues
}

module.exports = {
  values
}
