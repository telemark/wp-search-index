const axios = require('axios')
const generateToken = require('./generate-token')
const logger = require('./logger')

module.exports = async () => {
  const url = `${process.env.SEARCH_SERVICE}/indexes/${process.env.SEARCH_INDEX}`
  const token = generateToken()
  axios.defaults.headers.common['Authorization'] = token
  try {
    const { data } = await axios.delete(url)
    logger('info', ['delete-index', 'success', process.env.SEARCH_INDEX])
    return data
  } catch (error) {
    logger('error', ['delete-index', error])
    throw error
  }
}
