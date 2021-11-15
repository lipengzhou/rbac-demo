const jwt = require('jsonwebtoken')
const config = require('../config')
const { User } = require('../models')

module.exports = () => {
  return async (req, res, next) => {
    console.log('check login')
    try {
      let token = req.get('Authorization')
      if (!token) {
        return res.status(401).end('Unauthorized')
      }
      token = token.split('Bearer\u0020')[1] // 格式要求：注意 Bearer 后面有一个空格
      const { userId } = jwt.verify(token, config.tokenSecret)
      req.user = await User.findById(userId)
      next()
    } catch (err) {
      res.status(401).end('Unauthorized')
    }
  }
}
