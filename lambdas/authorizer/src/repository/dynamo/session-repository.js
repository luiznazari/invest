const dynamodb = require('aws-sdk/clients/dynamodb')

class Session {
  constructor() {
    this.docClient = new dynamodb.DocumentClient()
    this.tableName = process.env.SESSION_TABLE_NAME
  }

  async get(uuid) {
    const params = {
      Key: {
        id: uuid
      },
      TableName: this.tableName
    }

    return this.docClient.get(params)
      .promise()
      .then(response => response.Item)
  }
}

module.exports = Session
