const PaperBusiness = require('../business/stock-business')
const { LambdaResponses, HTTP_METHOD } = require('../common/utils/lambda-responses')
const SchemaValidator = require('../schema/schema-validator')
const { StockMovement } = require('../schema/investment-movement')

const paperBusiness = new PaperBusiness()

exports.create = async (event) => {
  try {
    LambdaResponses.validateMethod(event, HTTP_METHOD.POST)

    const requestBodyObject = SchemaValidator.validate(event.body, StockMovement.joiSchema())
    const investment = StockMovement.fromRequestBody(requestBodyObject)
    const result = await paperBusiness.create(investment)

    return LambdaResponses.success(result)
  } catch (error) {
    return LambdaResponses.error(error)
  }
}

exports.update = async (event) => {
  try {
    LambdaResponses.validateMethod(event, HTTP_METHOD.PUT)

    const { id } = event.pathParameters
    const requestBodyObject = SchemaValidator.validate(event.body, StockMovement.joiSchema())
    const investment = StockMovement.fromRequestBody(requestBodyObject)
    investment.id = id
    const result = await paperBusiness.update(investment)

    return LambdaResponses.success(result)
  } catch (error) {
    return LambdaResponses.error(error)
  }
}
