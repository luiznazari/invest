const uuidv4 = require('uuid').v4
const { isMoment } = require('moment')
const ApiError = require('../common/exception/api-exception')
const StockRepository = require('../repository/dynamo/stock-repository')

class StockService {
  #paperRepository = new StockRepository()

  async create(item) {
    if (item.id) {
      throw new ApiError('Could not create item: non-unique id')
    }

    const saveItem = {
      ...item,
      id: uuidv4()
    }
    this.#normalizeFields(saveItem)
    await this.#paperRepository.save(saveItem)

    return {
      id: saveItem.id
    }
  }

  async update(item) {
    if (!item.id || !this.getById(item.id)) {
      throw new ApiError('Could not update item: item not found')
    }

    this.#normalizeFields(item)
    await this.#paperRepository.save(item)

    return {
      id: item.id
    }
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

  #normalizeFields = (object) => {
    Object.keys(object).forEach((key) => {
      if (isMoment(object[key])) {
        // eslint-disable-next-line no-param-reassign
        object[key] = object[key].format()
      }
    })
    return object
  }
}

module.exports = StockService
