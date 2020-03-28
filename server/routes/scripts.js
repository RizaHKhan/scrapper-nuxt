const express = require('express')
const router = express.Router()
const scriptController = require('../controller/scriptController')

router.get('/checklist', scriptController.checklist)
router.get('/outbreak', scriptController.outbreak)

module.exports = router
