const uuid = require('uuid/v4')
const config = require('../config')

module.exports = post => {
  return {
    index: config.SEARCH_INDEX,
    type: config.SEARCH_INDEX_TYPE,
    id: uuid(),
    body: post
  }
}
