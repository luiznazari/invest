async function add(event) {
  console.log(JSON.stringify(event))
  return 'ok'
}

module.exports = {
  add
}
