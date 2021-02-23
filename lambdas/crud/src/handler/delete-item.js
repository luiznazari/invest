const PaperBusiness = require('../business/stock-business')
const { LambdaResponses, HTTP_METHOD } = require('../common/utils/lambda-responses')

const paperBusiness = new PaperBusiness()

exports.deleteById = async (event) => {
  try {
    LambdaResponses.validateMethod(event, HTTP_METHOD.DELETE)

    const { id } = event.pathParameters

    await paperBusiness.deleteById(id)

    return LambdaResponses.success()
  } catch (error) {
    return LambdaResponses.error(error)
  }
}
