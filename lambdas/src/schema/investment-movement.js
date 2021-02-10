const Joi = require('joi-i18n')
const moment = require('moment')
const OPERATION_TYPE = require('../common/enum/operation-type')
const INVESTMENT_TYPE = require('../common/enum/investment-type')

class StockMovement {
  id

  tenant_id

  type

  name

  operation_type

  value

  quantity

  date_time

  static fromRequestBody = (data) => Object.assign(new StockMovement(), {
    id: data.id,
    tenant_id: data.tenant_id,
    type: data.type,
    name: data.name,
    operation_type: data.operation_type,
    value: data.value,
    quantity: data.quantity,
    date_time: moment(data.date_time)
  })

  static joiSchema = () => Joi.object().keys({
    id: Joi.string(),
    tenant_id: Joi.string().required(),
    type: Joi.string().valid(INVESTMENT_TYPE.values()).required(),
    name: Joi.string().required(),
    operation_type: Joi.string().valid(OPERATION_TYPE.values()).required(),
    value: Joi.number().required(),
    quantity: Joi.number().required(),
    date_time: Joi.string().required()
  })
}

module.exports = { StockMovement }
