const PaperBusiness = require('../business/stock-business')
const { LambdaResponses, HTTP_METHOD } = require('../common/utils/lambda-responses')

const paperBusiness = new PaperBusiness()

exports.getById = async (event) => {
  try {
    LambdaResponses.validateMethod(event, HTTP_METHOD.GET)

    const { id } = event.pathParameters

    const item = await paperBusiness.findById(id)

    return LambdaResponses.success(item)
  } catch (error) {
    return LambdaResponses.error(error)
  }
}
