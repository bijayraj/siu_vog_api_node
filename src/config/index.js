const os = require("os")

let config = require('./config.json')[process.env.NODE_ENV || 'development']
config.baseUrl = os.hostname() + "api/v1"

module.exports = config