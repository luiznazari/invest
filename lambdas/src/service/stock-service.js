import StockRepository from '../repository/dynamo/stock-repository'

export default class StockService {
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
}
