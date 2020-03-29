const express = require('express')
const scriptController = require('../controller/scriptController')
const auth = require('../middleware/auth')
const router = express.Router()

router.post('/checklist', auth, scriptController.checklist)
router.post('/outbreak', auth, scriptController.outbreak)
router.post('/stackoverflow', auth, scriptController.stackoverflow)

module.exports = router
