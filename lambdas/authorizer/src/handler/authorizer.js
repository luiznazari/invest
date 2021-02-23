const SessionRepository = require('../repository/dynamo/session-repository')
const { validateHeader } = require('../common/utils/validator')
const logger = require('../common/utils/logger')

async function validateSessionId(event) {
  const authorize = await validateHeader(event)
  const sessionData = await new SessionRepository().get(authorize.session)

  if (!sessionData) {
    return null
  }

  return {
    ttl: sessionData.TTL,
    sessionId: sessionData.id
  }
}

exports.validateRequest = async (event, context, callback) => {
  try {
    logger.debug(`Received event: ${JSON.stringify(event)}`)

    const session = await validateSessionId(event)

    if (!session) {
      logger.info('Unauthorized: Invalid token.')
      callback('Unauthorized')
      return
    }

    const response = {
      context: {
        session: JSON.stringify(session)
      },
      policyDocument: {
        Statement: {
          Action: 'execute-api:Invoke',
          Effect: 'allow',
          Resource: event.methodArn
        }
      }, // roles,
      principalId: 'result'
    }

    callback(null, response)
    logger.info('Authorized!')

  } catch (e) {
    logger.error(`Error validating session token: ${e.stack}`)
    callback('Unauthorized')
  }
}
