const format = require('./lib/format')
const data = require('./lib/data')

module.exports = ({ json, cow = 'octopus' }) => json
  ? JSON.stringify(data)
  : format({ data, cow })