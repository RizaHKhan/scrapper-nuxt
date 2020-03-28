const checklist = require('../scripts/checklist')
const stackoverflow = require('../scripts/stackoverflow')
const outbreak = require('../scripts/outbreak')

exports.checklist = (req, res) => {
  try {
    checklist().then((data) => {
      res.send(data)
    }).catch(e => {
      console.log(e)
      res.send(e)
    })
  } catch (err) {
    console.log(err)
  }
}

exports.outbreak = (req, res) => {
  try {
    outbreak().then((data) => {
      res.send(data)
    }).catch(e => {
      console.log(e)
      res.send(e)
    })
  } catch (err) {
    console.log(err)
  }
}
