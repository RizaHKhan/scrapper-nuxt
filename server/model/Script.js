const mongoose = require('mongoose')
const ScriptSchema = mongoose.Schema({
  path: {
    type: String,
    required: true
  }
})

const Script = mongoose.model('Script', ScriptSchema)

module.exports = Script
