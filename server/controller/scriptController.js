import checklist from '../scripts/checlist'

exports.checklist = async (req, res) => {
  try {
    const data = await checklist
    res.send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}
