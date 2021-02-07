const dynamodb = require('aws-sdk/clients/dynamodb')

export default class StockRepository {
  constructor() {
    this.docClient = new dynamodb.DocumentClient()
    this.tableName = process.env.STOCK_TABLE_NAME
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
      .then((data) => data.Items)
  }

  getById(id) {
    const params = {
      TableName: this.tableName,
      Key: { id }
    }
    return this.docClient.get(params).promise()
      .then((data) => data.Item)
  }
}
