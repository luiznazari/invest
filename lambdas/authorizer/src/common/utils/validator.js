const HEADER = require('../../enum/header-enum')

module.exports.validateHeader = async (event) => {
  const objHeader = {
    session: event.headers[HEADER.SESSION]
  }

  if (!!objHeader.session === false) {
    throw new Error(`${HEADER.SESSION} não pode ser nulo ou vazio`)
  }

  return objHeader
}
