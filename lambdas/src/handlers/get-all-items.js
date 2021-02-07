const { default: PaperBusiness } = require('../business/stock-business')
const { default: LambdaResponses, HTTP_METHOD } = require('../utils/lambda-responses')

const paperBusiness = new PaperBusiness()

exports.putItemHandler = async (event) => {
  LambdaResponses.validateMethod(event, HTTP_METHOD.POST)

  const items = await paperBusiness.findAll()

  return LambdaResponses.success(items)
}
