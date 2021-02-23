/* eslint-disable no-console */
module.exports = {
  debug(message) {
    this.info(message)
  },

  info(message) {
    console.log(message)
  },

  warn(message) {
    console.warn(message)
  },

  error(message) {
    console.error(message)
  }
}
