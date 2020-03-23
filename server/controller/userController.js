const User = require('../model/User')

exports.register = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.send(user)
  } catch (error) {
    res.statu(400).send(error)
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    res.send(user)
  } catch (error) {
    res.statu(400).send(error)
  }
}
