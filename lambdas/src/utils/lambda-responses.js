const { default: logger } = require('./logger')

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_ERROR: 500
}

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

export default class LambdaResponses {
  static success(responseBody) {
    return {
      statusCode: HTTP_STATUS.OK,
      body: JSON.stringify(responseBody)
    }
  }

  static badRequest(responseBody) {
    return {
      statusCode: HTTP_STATUS.BAD_REQUEST,
      body: JSON.stringify(responseBody)
    }
  }

  static internalError(responseBody) {
    return {
      statusCode: HTTP_STATUS.INTERNAL_ERROR,
      body: JSON.stringify(responseBody)
    }
  }

  static methodNotAllowed(responseBody) {
    return {
      statusCode: HTTP_STATUS.METHOD_NOT_ALLOWED,
      body: JSON.stringify(responseBody)
    }
  }

  static validateMethod(event, method) {
    logger.debug(`Received: ${event}`)
    if (event.httpMethod !== method) {
      throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`)
    }
  }
}
