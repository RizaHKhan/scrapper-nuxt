const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')

userRouter.post('/register', userController.register)
userRouter.get('/login', userController.login)

module.exports = userRouter
