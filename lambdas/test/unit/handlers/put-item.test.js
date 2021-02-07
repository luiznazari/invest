const dynamodb = require('aws-sdk/clients/dynamodb')
const { expect } = require('chai')
const sinon = require('sinon')
const lambda = require('../../../src/handlers/put-item.js')

describe('Test putItemHandler', () => {
  let putSpy

  beforeEach(() => {
    putSpy = sinon.stub(dynamodb.DocumentClient.prototype, 'put')
  })

  afterEach(() => {
    putSpy.restore()
  })

  it('should add id to the table', async () => {
    const returnedItem = { id: 'id1', name: 'name1' }

    putSpy.returns({
      promise: () => Promise.resolve(returnedItem)
    })

    const event = {
      httpMethod: 'POST',
      body: '{"id": "id1","name": "name1"}'
    }

    const result = await lambda.put(event)
    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify(returnedItem)
    }

    expect(result).to.be.deep.equal(expectedResult)
  })
})
