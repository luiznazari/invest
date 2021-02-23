const dynamodb = require('aws-sdk/clients/dynamodb')

class StockRepository {
  constructor() {
    this.docClient = new dynamodb.DocumentClient()
    this.tableName = process.env.INVESTMENT_TABLE_NAME
  }

  save(item) {
    const params = {
      TableName: this.tableName,
      Item: item
    }
    return this.docClient.put(params).promise()
  }

  getAll() {
    const params = {
      TableName: this.tableName
    }
    return this.docClient.scan(params).promise()
      .then(data => data.Items)
  }

  getById(id) {
    const params = {
      TableName: this.tableName,
      Key: { id }
    }
    return this.docClient.get(params).promise()
      .then(data => data.Item)
  }

  deleteById(id) {
    const params = {
      TableName: this.tableName,
      Key: { id }
    }
    return this.docClient.delete(params).promise()
      .then(data => data.$response)
  }
}

module.exports = StockRepository
