const express = require('express')
const scriptController = require('../controller/scriptController')
const router = express.Router()

router.get('/checklist', scriptController.checklist)
router.get('/outbreak', scriptController.outbreak)

module.exports = router
