const express = require('express')
const router = express.Router()
const scriptController = require('../controller/scriptController')

router.get('/checklist', scriptController.checklist)

module.exports = router
