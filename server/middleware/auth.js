const jwt = require('jsonwebtoken')
const User = require('../model/User')

const auth = async (req, res, next) => {
  try {
    const token = req.body.headers.Authorization.replace('Bearer ', '')
    const decoded = jwt.verify(token, 'ScrapperProBro')
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!user) {
      throw new Error()
    }

    next()
  } catch (error) {
    res.send(401).send({ Error: 'Please Authenticate' })
  }
}

module.exports = auth
