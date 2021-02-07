const PaperBusiness = require('../business/stock-business')
const { LambdaResponses, HTTP_METHOD } = require('../common/utils/lambda-responses')
const SchemaValidator = require('../schema/schema-validator')
const { StockMovement } = require('../schema/investment-movement')

const paperBusiness = new PaperBusiness()

exports.put = async (event) => {
  try {
    LambdaResponses.validateMethod(event, HTTP_METHOD.POST)

    SchemaValidator.validate(event.body, StockMovement.joiSchema())
    const stock = StockMovement.fromRequestBody(event.body)
    const result = await paperBusiness.createPaper(stock)

    return LambdaResponses.success(result)
  } catch (error) {
    return LambdaResponses.error(error)
  }
}
