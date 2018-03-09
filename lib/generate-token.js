const jwt = require('jsonwebtoken')
const pkg = require('../package.json')

module.exports = () => {
  const payload = {
    system: pkg.name,
    version: pkg.version
  }

  const options = {
    expiresIn: '1m',
    issuer: 'https://auth.t-fk.no'
  }

  const token = `Bearer ${jwt.sign(payload, process.env.JWT_SECRET, options)}`

  return token
}
