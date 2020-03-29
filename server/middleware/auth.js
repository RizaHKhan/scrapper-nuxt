const jwt = require('jsonwebtoken')
const User = require('../model/User')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')
    console.log(token)
  } catch (error) {
    res.send(401).send({ Error: 'Please Authenticate' })
  }
}

module.exports = auth
