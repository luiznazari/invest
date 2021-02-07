const PaperBusiness = require('../business/stock-business')
const { LambdaResponses, HTTP_METHOD } = require('../common/utils/lambda-responses')

const paperBusiness = new PaperBusiness()

exports.getAllItems = async (event) => {
  try {
    LambdaResponses.validateMethod(event, HTTP_METHOD.GET)

    const items = await paperBusiness.findAll()

    return LambdaResponses.success(items)
  } catch (error) {
    return LambdaResponses.error(error)
  }
}
