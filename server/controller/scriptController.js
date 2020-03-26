const checklist = require('../scripts/checklist')
const stackoverflow = require('../scripts/stackoverflow')

exports.checklist = (req, res) => {
  try {
    stackoverflow().then((data) => {
      console.log(data)
      res.send(data)
    }).catch(e => {
      console.log(e)
      res.send(e)
    })
  } catch (err) {
    console.log(err)
  }
}
