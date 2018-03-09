const axios = require('axios')
const generateToken = require('./generate-token')
const config = require('../config')
const logger = require('./logger')

module.exports = async document => {
  const token = generateToken()
  axios.defaults.headers.common['Authorization'] = token
  try {
    const { data } = await axios.put(config.SEARCH_SERVICE, document)
    logger('info', ['add-document', 'success', document.id])
    return data
  } catch (error) {
    logger('error', ['add-document', error])
    throw error
  }
}
