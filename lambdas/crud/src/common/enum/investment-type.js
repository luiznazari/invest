const { values } = require('./enum-utils')

const INVESTMENT_TYPE = {
  STOCK: {
    id: 'STOCK',
    name: 'Stock'
  },
  BOND: {
    id: 'BOND',
    name: 'Bond'
  },
  INVESTMENT_FUND: {
    id: 'INVESTMENT_FUND',
    name: 'Investment Fund'
  },
  BANK_PRODUCT: {
    id: 'BANK_PRODUCT',
    name: 'Bank Product'
  },
  OPTION: {
    id: 'OPTION',
    name: 'Option'
  },
  ANNUITIE: {
    id: 'ANNUITIE',
    name: 'Annuitie'
  },
  RETIREMENT: {
    id: 'RETIREMENT',
    name: 'Retirement'
  },
  SAVING_FOR_EDUCATION: {
    id: 'SAVING_FOR_EDUCATION',
    name: 'Saving for Education'
  },
  ALTERNATIVE_AND_COMPLEX_PRODUCT: {
    id: 'ALTERNATIVE_AND_COMPLEX_PRODUCT',
    name: 'Alternative and Complex Product'
  },
  CRYPTOCURRENCY: {
    id: 'CRYPTOCURRENCY',
    name: 'Initial Coin Offerings and Cryptocurrency'
  },
  COMMODITY_FUTURE: {
    id: 'COMMODITY_FUTURE',
    name: 'Commodity Future'
  },
  SECURITY_FUTURE: {
    id: 'SECURITY_FUTURE',
    name: 'Security Future'
  },
  INSURANCE: {
    id: 'INSURANCE',
    name: 'Insurance'
  },
  values
}

module.exports = INVESTMENT_TYPE
