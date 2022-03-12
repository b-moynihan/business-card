const format = require('./lib/format')
const data = require('./lib/data')

// Define default cow and pass to format module
module.exports = ({ cow="octopus", rand }) => format({ data, cow, rand})