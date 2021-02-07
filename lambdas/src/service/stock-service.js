const StockRepository = require('../repository/dynamo/stock-repository')

class StockService {
  #paperRepository = new StockRepository()

  create(item) {
    return this.#paperRepository.save(item)
  }

  getById(id) {
    return this.#paperRepository.getById(id)
  }

  getAll() {
    return this.#paperRepository.getAll()
  }

  deleteById(id) {
    return this.#paperRepository.deleteById(id)
  }
}

module.exports = StockService
