const dynamodb = require('aws-sdk/clients/dynamodb')
const { expect } = require('chai')
const sinon = require('sinon')
const lambda = require('../../../src/handler/save-item.js')
const putEventJson = require('../../mocks/events/event-post-item.json')

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

    const result = await lambda.put(putEventJson)
    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify(returnedItem)
    }

    expect(result).to.be.deep.equal(expectedResult)
  })
})
