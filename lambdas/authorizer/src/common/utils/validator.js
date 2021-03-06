const HEADER = require('../../enum/header-enum')

module.exports.validateHeader = async (event) => {
  const objHeader = {
    session: event.headers[HEADER.SESSION] || event.headers[HEADER.SESSION.toLocaleLowerCase()]
  }

  if (!!objHeader.session === false) {
    throw new Error(`${HEADER.SESSION} não pode ser nulo ou vazio`)
  }

  return objHeader
}
