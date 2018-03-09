const axios = require('axios')
const logger = require('./logger')

module.exports = async url => {
  try {
    const { data } = await axios(url)
    logger('info', ['get-posts', 'success', url])
    return data
  } catch (error) {
    logger('error', ['get-posts', url, error])
    throw error
  }
}
