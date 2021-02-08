const dynamodb = require('aws-sdk/clients/dynamodb')
const { expect } = require('chai')
const sinon = require('sinon')
const lambda = require('../../../src/handlers/get-by-id.js')

describe('Test getByIdHandler', () => {
  let getSpy

  beforeEach(() => {
    getSpy = sinon.stub(dynamodb.DocumentClient.prototype, 'get')
  })

  afterEach(() => {
    sinon.restore()
  })

  it('should get item by id', async () => {
    const item = { id: 'id1' }

    getSpy.returns({
      promise: () => Promise.resolve({ Item: item })
    })

    const event = {
      httpMethod: 'GET',
      pathParameters: {
        id: 'id1'
      }
    }

    const result = await lambda.getById(event)

    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify(item)
    }

    expect(result).to.be.deep.equal(expectedResult)
  })
})
