const Joi = require('joi-i18n')
const ptBr = require('../common/i18n/locate-pt_br')
const SchemaValidatiorException = require('../common/exception/schema-validation-exception')

class SchemaValidator {
  constructor(schema) {
    Joi.addLocaleData('pt_BR', ptBr)
    this.schema = schema
  }

  validate(requestBody) {
    Joi.validate(requestBody, this.schema, { locale: 'pt_BR' }, (err) => {
      if (err) {
        throw new SchemaValidatiorException(err.details)
      }
    })

    return requestBody
  }

  static validate = (object) => new SchemaValidator().validate(object)
}

module.exports = SchemaValidator
