const axios = require('axios')
const generateToken = require('./generate-token')
const config = require('../config')

module.exports = async document => {
  const token = generateToken()
  axios.defaults.headers.common['Authorization'] = token
  try {
    const { data } = await axios.put(config.API_URL, document)
    return data
  } catch (error) {
    throw error
  }
}
