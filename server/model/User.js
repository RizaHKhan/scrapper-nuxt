const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [5, 'Password must be at least 5 characters long']
  }
})

UserSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

UserSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'ScrapperProBro')
  return token
}

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = User.find({ email })

  if (!user) {
    throw new Error('User not found.')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Login failed, please try again later!')
  }

  return user
}

const User = mongoose.model('User', UserSchema)

module.exports = User
