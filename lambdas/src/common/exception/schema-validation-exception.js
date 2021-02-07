const ApiError = require('./api-exception')
const HTTP_STATUS_CODE = require('../enum/http-status')

class SchemaValidatiorException extends ApiError {
  constructor(message) {
    super(message, 'SchemaValidatiorException', HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY)
  }
}

module.exports = SchemaValidatiorException
