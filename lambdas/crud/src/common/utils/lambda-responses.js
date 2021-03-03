const HTTP_STATUS = require('../enum/http-status')
const ApiError = require('../exception/api-exception')

const logger = require('./logger')

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS'
}

class LambdaResponses {
  static success(body) {
    return LambdaResponses.#buildResponse({
      statusCode: HTTP_STATUS.OK,
      body
    })
  }

  static badRequest(body) {
    return LambdaResponses.#buildResponse({
      statusCode: HTTP_STATUS.BAD_REQUEST,
      body
    })
  }

  static internalError(body) {
    return LambdaResponses.#buildResponse({
      statusCode: HTTP_STATUS.INTERNAL_ERROR,
      body
    })
  }

  static methodNotAllowed(body) {
    return LambdaResponses.#buildResponse({
      statusCode: HTTP_STATUS.METHOD_NOT_ALLOWED,
      body
    })
  }

  static error(error) {
    if (error instanceof Error) {
      logger.error(`statusCode: ${error.statusCode}; stack: ${error.stack}`)
    }
    return LambdaResponses.#buildResponse({
      statusCode: error instanceof ApiError ? error.statusCode : HTTP_STATUS.INTERNAL_ERROR,
      body: {
        message: String(error instanceof Error ? error.message : (error || ''))
      }
    })
  }

  static #buildResponse = (response) => ({
    statusCode: response.statusCode,
    body: JSON.stringify(response.body || {}),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })

  static validateMethod(event, method) {
    logger.debug(`Received: ${typeof event === 'object' ? JSON.stringify(event) : event}`)
    if (event.httpMethod !== method) {
      throw new Error(`This function only accepts ${method} method`
       + `, but got: ${event.httpMethod} method.`)
    }
  }
}

module.exports = {
  HTTP_STATUS,
  HTTP_METHOD,
  LambdaResponses,
  default: LambdaResponses
}
