const { values } = require('./enum-utils')

const INVESTMENT_TYPE = {
  STOCKS: {
    id: 'STOCKS',
    name: 'Stocks'
  },
  BONDS: {
    id: 'BONDS',
    name: 'Bonds'
  },
  INVESTMENT_FUNDS: {
    id: 'INVESTMENT_FUNDS',
    name: 'Investment Funds'
  },
  BANK_PRODUCTS: {
    id: 'BANK_PRODUCTS',
    name: 'Bank Products'
  },
  OPTIONS: {
    id: 'OPTIONS',
    name: 'Options'
  },
  ANNUITIES: {
    id: 'ANNUITIES',
    name: 'Annuities'
  },
  RETIREMENT: {
    id: 'RETIREMENT',
    name: 'Retirement'
  },
  SAVING_FOR_EDUCATION: {
    id: 'SAVING_FOR_EDUCATION',
    name: 'Saving for Education'
  },
  ALTERNATIVE_AND_COMPLEX_PRODUCTS: {
    id: 'ALTERNATIVE_AND_COMPLEX_PRODUCTS',
    name: 'Alternative and Complex Products'
  },
  CRYPTOCURRENCIES: {
    id: 'CRYPTOCURRENCIES',
    name: 'Initial Coin Offerings and Cryptocurrencies'
  },
  COMMODITY_FUTURES: {
    id: 'COMMODITY_FUTURES',
    name: 'Commodity Futures'
  },
  SECURITY_FUTURES: {
    id: 'SECURITY_FUTURES',
    name: 'Security Futures'
  },
  INSURANCE: {
    id: 'INSURANCE',
    name: 'Insurance'
  },
  values
}

module.exports = INVESTMENT_TYPE
