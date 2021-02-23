const StockService = require('../service/stock-service')

class StockBusiness {
  #paperService = new StockService()

  create(investment) {
    return this.#paperService.create(investment)
  }

  update(investment) {
    return this.#paperService.update(investment)
  }

  findById(id) {
    return this.#paperService.getById(id)
  }

  findAll() {
    return this.#paperService.getAll()
  }

  deleteById(id) {
    return this.#paperService.deleteById(id)
  }
}

module.exports = StockBusiness
