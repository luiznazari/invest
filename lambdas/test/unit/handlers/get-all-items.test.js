const dynamodb = require('aws-sdk/clients/dynamodb')
const { expect } = require('chai')
const sinon = require('sinon')
const lambda = require('../../../src/handlers/get-all-items.js')

describe('Test getAllItemsHandler', () => {
  let scanSpy

  beforeEach(() => {
    scanSpy = sinon.stub(dynamodb.DocumentClient.prototype, 'scan')
  })

  afterEach(() => {
    sinon.restore()
  })

  it('should return ids', async () => {
    const items = [{ id: 'id1' }, { id: 'id2' }]

    scanSpy.returns({
      promise: () => Promise.resolve({ Items: items })
    })

    const event = {
      httpMethod: 'GET'
    }

    const result = await lambda.getAllItems(event)

    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify(items)
    }

    expect(result).to.be.deep.equal(expectedResult)
  })
})
