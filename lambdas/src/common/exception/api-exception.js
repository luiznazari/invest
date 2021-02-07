const HTTP_STATUS_CODE = require('../enum/http-status')

class ApiError extends Error {
  constructor(message, errPrefix = 'ApiError', statusCode = HTTP_STATUS_CODE.BAD_REQUEST) {
    super(`${errPrefix}: ${message}`)
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = ApiError
