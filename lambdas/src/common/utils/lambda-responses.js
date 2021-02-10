const ApiError = require('../exception/api-exception')

const logger = require('./logger')

const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_ERROR: 500
}

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

class LambdaResponses {
  static success(responseBody) {
    return {
      statusCode: HTTP_STATUS.OK,
      body: responseBody
    }
  }

  static badRequest(responseBody) {
    return {
      statusCode: HTTP_STATUS.BAD_REQUEST,
      body: responseBody
    }
  }

  static internalError(responseBody) {
    return {
      statusCode: HTTP_STATUS.INTERNAL_ERROR,
      body: responseBody
    }
  }

  static methodNotAllowed(responseBody) {
    return {
      statusCode: HTTP_STATUS.METHOD_NOT_ALLOWED,
      body: responseBody
    }
  }

  static error(error) {
    if (error instanceof Error) {
      logger.error(error.stack)
    }
    return {
      statusCode: error instanceof ApiError ? error.statusCode : HTTP_STATUS.INTERNAL_ERROR,
      body: {
        message: error instanceof Error ? error.message : JSON.stringify(error)
      }
    }
  }

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
