const axios = require('axios')

module.exports = async url => {
  try {
    const { data } = await axios(url)
    return data
  } catch (error) {
    throw error
  }
}
