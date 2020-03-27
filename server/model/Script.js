const mongoose = require('mongoose')
const ScriptSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Script = mongoose.model('Script', ScriptSchema)

module.exports = Script
