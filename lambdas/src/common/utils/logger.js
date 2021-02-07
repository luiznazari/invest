/* eslint-disable no-console */
module.exports = {
  debug(message) {
    this.info(message)
  },

  info(message) {
    console.log(message)
  },

  warn(message) {
    console.warn('\x1b[33m%s\x1b[0m', message)
  },

  error(message) {
    console.log('\x1b[31m%s\x1b[0m', message)
  }
}
