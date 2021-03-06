const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [5, 'Password must be at least 5 characters long']
  },
  scripts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Script'
  }],
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
})

UserSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('User not found.')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Login failed, please try again later!')
  }
  return user
}

UserSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'ScrapperProBro', { expiresIn: '1 minute' })

  // Save generated token to database
  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

const User = mongoose.model('User', UserSchema)

module.exports = User
