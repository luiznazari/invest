const dynamodb = require('aws-sdk/clients/dynamodb')
const { expect } = require('chai')
const sinon = require('sinon')
const authorizeHandler = require('../src/handler/authorizer')

const example_event = {
  type: 'REQUEST',
  methodArn: 'arn:aws:execute-api:us-east-1:263617457603:a3jqydaf57/ESTestInvoke-stage/GET/',
  resource: '/',
  path: '/',
  httpMethod: 'GET',
  headers: {
    'X-Ivs-Session': '06a2036e-2dcc-4936-9985-2bed045f796c'
  },
  multiValueHeaders: {
    'X-Ivs-Session': [
      '06a2036e-2dcc-4936-9985-2bed045f796c-asda'
    ]
  },
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  pathParameters: {},
  stageVariables: {},
  requestContext: {
    resourceId: 'test-invoke-resource-id',
    resourcePath: '/',
    httpMethod: 'GET',
    extendedRequestId: 'bIB3ZHKoIAMF_gw=',
    requestTime: '22/Feb/2021:02:27:33 +0000',
    path: '/',
    accountId: '263617457603',
    protocol: 'HTTP/1.1',
    stage: 'test-invoke-stage',
    domainPrefix: 'testPrefix',
    requestTimeEpoch: 1613960853606,
    requestId: 'd04739e2-2719-4fbf-b062-e68f331c2bbc',
    identity: {
      cognitoIdentityPoolId: null,
      cognitoIdentityId: null,
      apiKey: 'test-invoke-api-key',
      principalOrgId: null,
      cognitoAuthenticationType: null,
      userArn: 'arn:aws:iam::263617457603:root',
      apiKeyId: 'test-invoke-api-key-id',
      userAgent: 'test'
    }
  }
}

const authorizePromise = (event, callback) => new Promise((resolve, reject) => {
  try {
    authorizeHandler.validateRequest(event, {}, callback)
    resolve({ status: 200 })
  } catch (e) {
    reject(e)
  }
})

const callback = (errorMessage) => {
  if (errorMessage) {
    throw new Error(errorMessage)
  }
}

describe('Suite de teste de autorização', () => {
  it('Sucesso: Autorização de usuário válido', async () => {
    sinon.stub(dynamodb.DocumentClient.prototype, 'get').resolves({
      id: 'abc',
      TTL: 123,
      tenant_id: 'def'
    })

    const response = await authorizePromise(example_event, callback)
    expect(response.status).to.be.eq(200)
  })

  afterEach(() => {
    sinon.restore()
  })
})
