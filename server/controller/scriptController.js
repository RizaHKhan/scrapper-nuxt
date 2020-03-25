const checklist = require('../scripts/checlist')

exports.checklist = (req, res) => {
  try {
    checklist().then((data) => {
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
