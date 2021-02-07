import StockService from '../service/stock-service'

export default class StockBusiness {
  #paperService = new StockService()

  createPaper(paper) {
    return this.#paperService.create(paper)
  }

  findById(id) {
    return this.#paperService.getById(id)
  }

  findAll() {
    return this.#paperService.getAll()
  }
}
